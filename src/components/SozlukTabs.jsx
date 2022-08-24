import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, Card } from "react-bootstrap";
import { sozlukSelector } from "../features/sozlukSlice";
import { fetchTdkSearching } from "../features/sozlukAction";

export default function SozlukTabs() {
  const { soz } = useSelector(sozlukSelector).tdkSozluk;
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const birlesikler = soz?.birlesikler?.split(", ");
  const handleBirlesikler = async (birlesik) => {
    dispatch(fetchTdkSearching(birlesik));
  };
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 d-flex justify-content-center"
    >
      {!soz.atasozu ? (
        " "
      ) : (
        <Tab eventKey="atasozleri" title="Atasözleri / Deyimler">
          <div className="row mt-5 gap-1 justify-content-center mb-5">
            {soz.atasozu?.map((ata, ind) => (
              <Card
                key={ind}
                bg="light"
                className="col-5 col-sm-5 col-md-4 col-lg-3 text-light"
              >
                <Card.Body className="row d-flex justify-content-center text-dark text-center cursor-pointer">
                  <div className="d-flex justify-content-center align-items-center" onClick={() => handleBirlesikler(ata.madde)}>{ata.madde}</div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Tab>
      )}
      {!soz.birlesikler ? (
        ""
      ) : (
        <Tab eventKey="birlesikler" title="Birleşik Kelimeler">
          <div className="row mt-5 gap-1 justify-content-center mb-5">
            {birlesikler?.map((birlesik, ind) => (
              <Card
                key={ind}
                bg="light"
                className="col-3 col-sm-5 col-md-4 col-lg-3 text-light"
              >
                <Card.Body className="row d-flex justify-content-center text-dark text-center cursor-pointer">
                  <div className="d-flex justify-content-center align-items-center" onClick={() => handleBirlesikler(birlesik)}>
                    {birlesik}{" "}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Tab>
      )}
    </Tabs>
  );
}
