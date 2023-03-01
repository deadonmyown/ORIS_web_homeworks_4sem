//import logo from './logo.svg';
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import { Col, Row } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SobakaCard from "./components/SobakaCard";
import SobakaCards from "./containers/SobakaCards";

import './App.css';
import SobakaInfoCard from "./components/SobakaInfoCard";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_YYu7aVxIwkuT6zzYPiZhDbgca61a32FEKYnlRn1zPpaX1KFt4pJdOPjFj4ptlBIZ'
          },
        };

        const response = await fetch(
          'https://api.thedogapi.com/v1/breeds', requestOptions
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData()
  }, [])


  const sobaki = <Row>{data.sort((a, b) => a.name.localeCompare(b.name))
    .map((item, index) => (<Col key={index} xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }}>
      <SobakaCard title={item.name} description={item.bred_for} src={item.image.url} index={index} />
    </Col>))}
  </Row>;

  function GetSobaka() {
    const params = useParams();
    const sobaka = data.at(params.sobakaId);
    return <div><SobakaInfoCard sobakaInfo={sobaka} /></div>;
  }

  function Home() {
    return sobaki;
  }

  return (
    <>
      <Router>
        <h1 align="center">Who let the dogs out</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sobaka/:sobakaId" element={<GetSobaka />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found etc</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;