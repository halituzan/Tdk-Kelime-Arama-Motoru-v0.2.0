import React from "react";
import { Alert, Badge, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { ThreeDots } from "react-loading-icons";
import { useSelector } from "react-redux";
import { sozlukSelector } from "../features/sozlukSlice";

export default function Home() {
  const { soz, loading, hasErrors } = useSelector(sozlukSelector).tdkSozluk;
  const createMarkup = (comp) => {
    return { __html: comp.sehir };
  };
  const renderSozluk = () => {
    if (loading)
      return (
        <div className='d-flex justify-content-center'>
          <ThreeDots stroke='#000' fill='2e2e2e' speed={0.75} width='3rem' />
        </div>
      );
    if (hasErrors)
      return (
        <div className='d-flex justify-content-center fs-1'>
          Veri Çekilemedi
        </div>
      );

    return (
      <div className='container'>
        {soz?.word ? (
          <Alert
            variant='success'
            className='rounded-0 d-flex flex-column justify-content-center align-items-center'
          >
            <h1 className='text-center fs-1'>{soz?.word} </h1>
            <span>
              {soz?.lisan ? (
                <div>
                  <span className='fw-bold'>Lisan: </span>
                  <span>{soz.lisan.split(" ")[0]} </span>
                  <span className='fst-italic'>
                    ({soz.lisan?.split(" ")[1]})
                  </span>
                </div>
              ) : (
                ""
              )}
            </span>
          </Alert>
        ) : (
          ""
        )}
        {soz?.means && <h3 className='text-center'> Anlamlar</h3>}
        <div className='row d-flex justify-content-center pb-3'>
          {soz?.means?.length >= 0
            ? soz?.means.map((mean, index) => {
                return (
                  <div className='flip-card m-1' key={index}>
                    <div className='flip-card-inner'>
                      <Card
                        bg='white'
                        text='black'
                        className='mb-2 col-11 col-sm-5 border-0 col-md-3 col-lg-2 m-1 d-flex justify-content-center align-items-center flip-card-front'
                      >
                        <Card.Body className='d-flex align-items-center justify-content-center'>
                          <Card.Title className='text-center'>
                            {mean?.anlam}
                          </Card.Title>
                        </Card.Body>

                        <Badge bg='dark position-absolute badge-list'>
                          {!mean?.ozelliklerListe ? (
                            ""
                          ) : (
                            <span className='text-light fst-italic text-decoration-underline align-self-center p-2'>
                              {!mean?.ozelliklerListe
                                ? ""
                                : mean?.ozelliklerListe[0]?.tam_adi}
                            </span>
                          )}
                        </Badge>
                      </Card>

                      <Card
                        bg='light'
                        text='dark'
                        className='mb-2 col-11 col-sm-5 border-0 col-md-3 col-lg-2 m-1 d-flex justify-content-center align-items-center flip-card-back'
                        style={{ zIndex: "99999999" }}
                      >
                        <Card.Body className='d-flex align-items-center justify-content-center'>
                          <Card.Title className='text-center'>
                            {!mean?.orneklerListe ? (
                              "Örnek Bulunamadı."
                            ) : (
                              <div>
                                <p>{mean?.orneklerListe[0]?.ornek}</p>
                                <p className='fst-italic text-decoration-underline align-self-center'>
                                  {mean?.orneklerListe[0]?.yazar
                                    ? mean?.orneklerListe[0]?.yazar[0].tam_adi
                                    : ""}
                                </p>
                              </div>
                            )}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              })
            : ""}
          {/* Birleşik Kelimeler */}
          {soz?.compounds.length > 0 ? (
            <h3 className='text-center mt-5'> Birleşik Kelimeler</h3>
          ) : (
            ""
          )}
          <div className='row d-flex justify-content-center p-5 p-sm-0'>
            {soz?.compounds?.map((compound, index) => (
              <Card
                body
                className='col-5 col-sm-5 col-md-3 col-lg-2 m-1 text-center cursor-pointer d-flex justify-content-center align-items-center'
                key={index}
              >
                {compound}
              </Card>
            ))}
          </div>

          {/* Derleme Sözlüğü */}

          {soz?.compilation ? (
            <div className='derlemeler d-flex justify-content-center w-100 flex-grow-1  mt-5'>
              <Tab.Container
                id='left-tabs-example'
                defaultActiveKey={soz?.compilation[0]?.madde_id}
              >
                <Row className='w-100'>
                  <Col sm={3}>
                    <Nav variant='pills' className='flex-column bg-dark'>
                      {soz?.compilation?.map((comp) => (
                        <Nav.Item
                          key={comp?.madde_id}
                          variant='light'
                          className='bg-none border-bottom'
                        >
                          <Nav.Link
                            eventKey={comp?.madde_id}
                            dangerouslySetInnerHTML={createMarkup(comp)}
                          ></Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col
                    sm={9}
                    className='d-flex flex-column justify-content-start align-items-start pt-1 text-light bg-white'
                  >
                    {soz?.compilation && (
                      <h3 className='text-center text-dark w-100'>
                        {" "}
                        Yöresel Derlemeler
                      </h3>
                    )}
                    <Tab.Content className='w-100'>
                      {soz?.compilation?.map((comp, index) => (
                        <Tab.Pane
                          key={index}
                          eventKey={comp?.madde_id}
                          className='text-center  text-dark'
                        >
                          <span className='fs-1 text-dark'>
                            Bu yörede/yörelerde{" "}
                            <span className='fst-italic fw-bold  text-dark'>
                              {soz?.word}{" "}
                            </span>
                            kelimesinin anlamı
                          </span>
                          <h2 className='my-5 p-2 border mx-3'>
                            {comp?.anlam}
                          </h2>
                          <p className='text-black'>
                            Eser Adı: {comp?.eser_ad}
                          </p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {soz?.word ? (
        renderSozluk()
      ) : (
        <div
          className='text-light d-flex justify-content-center w-100 h-100 p-5'
          style={{ minHeight: "82vh" }}
        >
          {soz == undefined ? (
            <h2>Aradığınız Kelime Bulunmamaktadır</h2>
          ) : (
            <h2>
              Lütfen kelime araması yapmak için yukarıdaki arama formunu
              kullanın
            </h2>
          )}
        </div>
      )}
    </div>
  );
}
