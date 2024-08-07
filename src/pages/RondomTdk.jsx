import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Search from "../components/Search";
import { sozlukSelector } from "../features/sozlukSlice";

export default function RondomTdk() {
  const { soz } = useSelector(sozlukSelector).tdkSozluk;

  return (
    <div
      className='w-100 d-flex flex-column justify-content-between'
      style={{ height: "100vh" }}
    >
      <div className='mobile-wrapper'>
        <Search soz={soz} />
        <Home />
      </div>

      <Footer />
    </div>
  );
}
