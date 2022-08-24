import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { sozlukSelector } from "../features/sozlukSlice";
export default function Proverbs() {
  const { soz } = useSelector(sozlukSelector).tdkSozluk;
  const prvbs = soz?.proverbs?.filter((pvb) => pvb.turu2 === "Atasözü");
  const idiom = soz?.proverbs?.filter((idm) => idm.turu2 === "Deyim");
  console.log(prvbs);
  return (
    <div>
      <div className="w-100 mobile-search p-4 m-0 bg-dark text-light bg-gradient row d-flex justify-content-center">
        <Button variant="success" className="col-12 col-sm-4 m-1">
          <Link to="/" className="text-light d-flex justify-content-center align-items-center">
          <AiFillHome className="align-self-center me-2 fs-5"/>  Anasayfa
          </Link>
        </Button>
        {idiom?.length > 0 ? (
          <Button variant="success" className="col-12 col-sm-4 m-1">
            <Link to="/idiom" className="text-light">
              Deyimler
            </Link>
          </Button>
        ) : (
          ""
        )}
      </div>
      {/* Atasözleri */}
      {prvbs ? <h3 className="text-center mt-5"> Atasözleri </h3> : ""}

      <div className="row d-flex justify-content-center p-5 p-sm-0">
        {prvbs?.map((prvbs, index) => (
          <Card
            className="col-12 col-sm-5 col-md-3 col-lg-2 m-1 text-center cursor-pointer"
            key={index}
          >
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="align-self-start">{prvbs.sozum}</h4>
              <hr className="bg-dark w-100" />
              <Card.Text>{prvbs.anlami}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
