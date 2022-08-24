import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { fetchTdk, fetchTdkSearching } from "../features/sozlukAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Search({ soz }) {
  const [searching, setSearching] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    let key = e.keyCode || e.which;
    if (key == 13) {
      if (searching === "") {
        dispatch(fetchTdk(Math.floor(Math.random() * 92411)));
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
      dispatch(fetchTdk(Math.floor(Math.random() * 92411)));
    }
    if (searching !== "") {
      dispatch(fetchTdkSearching(searching.toLocaleLowerCase()));
    }
  };

  return (
    <div className="w-100 mobile-search p-4 m-0 bg-dark bg-gradient row d-flex justify-content-center">
      {provbs?.length > 0 ? (
        <Button variant="success" className="mx-1 my-1 col-12 col-sm-2">
          <Link to="/proverbs" className="text-light">
            Atasözleri
          </Link>
        </Button>
      ) : (
        ""
      )}
      {idiom?.length > 0 ? (
        <Button variant="success" className="mx-1 my-1 col-12 col-sm-2">
          <Link to="/idiom" className="text-light">
            Deyimler
          </Link>
        </Button>
      ) : (
        ""
      )}

      <InputGroup className="col-12 col-sm-4 w-100 mt-2 w-sm-50">
        <Form.Control
          placeholder="Kelime Ara"
          aria-label="Kelime Ara"
          aria-describedby="basic-addon2"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <Button
          variant="success"
          id="button-addon2"
          onClick={() => handleNewSoz()}
        >
          Ara
        </Button>
      </InputGroup>
    </div>
  );
}
