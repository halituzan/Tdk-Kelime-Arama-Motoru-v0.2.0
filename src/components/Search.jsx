/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTdkSearching } from "../features/sozlukAction";

export default function Search({ soz }) {
  const [searching, setSearching] = useState("");

  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    let key = e.keyCode || e.which;
    if (key == 13) {
      if (searching === "") {
        toast.success("Lütfen Kelime Girin", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
      if (searching !== "") {
        dispatch(fetchTdkSearching(searching.toLocaleLowerCase()));
      }
    }
  };
  const proverbs = soz?.proverbs;
  const provbs = proverbs?.filter((pvb) => pvb.turu2 === "Atasözü");
  const idiom = proverbs?.filter((idm) => idm.turu2 === "Deyim");

  const handleNewSoz = () => {
    if (searching === "") {
      toast.success("Lütfen Kelime Girin", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
    if (searching !== "") {
      dispatch(fetchTdkSearching(searching.toLocaleLowerCase()));
    }
  };

  return (
    <div className='w-100 mobile-search p-4 m-0 bg-dark bg-gradient row d-flex justify-content-center'>
      <div className='container'>
        <div className='container d-flex flex-column flex-md-row'>
          {provbs?.length > 0 ? (
            <Button variant='success' className='mx-1 my-1 col-12 col-sm-2'>
              <Link to='/proverbs' className='text-light'>
                Atasözleri
              </Link>
            </Button>
          ) : (
            ""
          )}
          {idiom?.length > 0 ? (
            <Button variant='success' className='mx-1 my-1 col-12 col-sm-2'>
              <Link to='/idiom' className='text-light'>
                Deyimler
              </Link>
            </Button>
          ) : (
            ""
          )}
        </div>

        <InputGroup className='col-12 col-sm-4 w-100 mt-2 w-sm-50 container'>
          <Form.Control
            placeholder='Kelime Ara'
            aria-label='Kelime Ara'
            aria-describedby='basic-addon2'
            value={searching}
            onChange={(e) => setSearching(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <Button
            variant='success'
            id='button-addon2'
            onClick={() => handleNewSoz()}
          >
            Ara
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
