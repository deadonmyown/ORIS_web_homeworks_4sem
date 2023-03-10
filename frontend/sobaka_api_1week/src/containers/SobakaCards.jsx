import "../App.css"
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import { Col, Row } from 'antd';
import SobakaCard from "../components/SobakaCard";
import { Pagination } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

const SobakaCards = () => {
    const [sobakas, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSobakas, setCurrentSobakas] = useState([]);
    const [pageNumber, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://localhost:7091/dog`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
                setCurrentSobakas(actualData.slice(offset, pageSize));
            } catch (err) {
                setError(err.message);
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])
    
    

    const handlePageChange = (page, pageSize) => {
        console.log(page, pageSize);
        setPage(page);
        setPageSize(pageSize);
        const funcOffset = (page - 1) * pageSize;
        setOffset(funcOffset);
        const currentSobakas = sobakas?.slice(funcOffset, funcOffset + pageSize);

        setCurrentSobakas(currentSobakas);
    };

    useEffect(() => {setCurrentSobakas(sobakas?.slice(offset, pageSize))}, []);

    const totalSobakas = sobakas?.length;


    if ((totalSobakas === 0) || (totalSobakas === undefined)) return null;

    return (
        <>
            <h1 align="center">Who let the dogs out</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <Pagination defaultCurrent={pageNumber} total={totalSobakas} onChange={handlePageChange} />
            <Row>{currentSobakas?.sort((a, b) => a.name.localeCompare(b.name))
                ?.map((item) => (<Col key={item.id} xs={{ span: 5, offset: 1, }} lg={{ span: 6, offset: 2, }}>
                    <SobakaCard title={item.name} description={(item.shortInfo == undefined) ? item.breed.bredFor : item.shortInfo} src={item.image.url} index={item.id} />
                </Col>))}
            </Row>;

        </>
    );
}

export default SobakaCards;