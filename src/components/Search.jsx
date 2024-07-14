import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTdk, fetchTdkSearching } from "../features/sozlukAction";

export default function Search({ soz }) {
  const [searching, setSearching] = useState("");
  const [searchList, setSearchList] = useState([]);
  console.log(searchList);

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

  // const handler = async () => {
  //   for (let i = 0; i < 10; i++) {
  //     axios.get(`https://sozluk.gov.tr/gts_id?id=${i}`).then(async (res) => {
  //       console.log(res.data);

  //       await tdkAllApi(res.data[0]?.madde).then((r) => {
  //         console.log(r);

  //          setSearchList((prev) => [...prev, r?.data]);
  //       });
  //     });
  //   }
  // };

  return (
    <div className="w-100 mobile-search p-4 m-0 bg-dark bg-gradient row d-flex justify-content-center">
      {/* <button onClick={handler}>Çek</button> */}

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
