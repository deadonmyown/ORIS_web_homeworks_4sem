//import logo from './logo.svg';
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import { Col, Row } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EmailBox from "./components/EmailBox";
import Review from "./components/Review";
import SobakaCards from "./containers/SobakaCards";

import './App.css';
import SobakaInfoCard from "./components/SobakaInfoCard";


function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://localhost:44387/Dog', requestOptions
  //       );
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       let actualData = await response.json();
  //       setData(actualData);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       console.log(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getData()
  // }, [])


  // const sobaki = <Row>{data.sort((a, b) => a.name.localeCompare(b.name))
  //   .map((item, index) => (<Col key={index} xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }}>
  //     <SobakaCard title={item.name} description={item.shortInfo ?? item.breed} src={item.image.url} index={index} />
  //   </Col>))}
  // </Row>;

  function GetSobaka() {
    const params = useParams();
    return <div><SobakaInfoCard id={params.sobakaId} /></div>;
  }

  // function Home() {
  //   return sobaki;
  // }

  return (
    <>
      <Router>
        {/* <h1 align="center">Who let the dogs out</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )} */}
        <div>
          <Routes>
            <Route exact path="/" element={<SobakaCards />} />
            <Route path="/sobaka/:sobakaId" element={<GetSobaka />} />
            <Route path="/email" element={<EmailBox />}/>
            <Route path="/review" element={<Review />}/>
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