import React from "react";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { sozlukSelector } from "../features/sozlukSlice";
import Home from "../components/Home";
import Footer from "../components/Footer";
import axios from "axios";

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
