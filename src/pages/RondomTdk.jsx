import React from "react";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { sozlukSelector } from "../features/sozlukSlice";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function RondomTdk() {
  const { soz } = useSelector(sozlukSelector).tdkSozluk;
  console.log(soz);
  return (
    <div className="w-100 d-flex flex-column justify-content-between">
      <div className="mobile-wrapper">
        <Search soz={soz} />
        <Home />
      </div>
      <Footer/>
    </div>
  );
}
