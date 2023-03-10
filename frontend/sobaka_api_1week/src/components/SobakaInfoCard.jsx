import { Image } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import { useParams } from 'react-router';
import { useState } from "react";
import { useEffect } from "react";
const { Header, Content, Footer } = Layout;


const SobakaInfoCard = ({ id }) => {
  //react i js polnoe govno

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7091/dog/${id}`
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
      } finally {
        setLoading(false);
      }
    }
    getData()
  }, [])

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="img-holder">
        <Image
          style={{ verticalAlign: 'middle', }}
          width={data?.image.width}
          height={data?.image.height}
          src={data?.image.url}
        />
      </div>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Sobaka</Breadcrumb.Item>
            <Breadcrumb.Item>{data?.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <h5>Weight:</h5>
            <p>Imperial: {data?.weight.imperialMinWeight} - {data?.weight.imperialMaxWeight}</p>
            <p>Metric: {data?.weight.metricMinWeight} - {data?.weight.metricMaxWeight}</p>
            <h5>Height:</h5>
            <p>Imperial: {data?.height.imperialMinHeight} - {data?.height.imperialMaxHeight}</p>
            <p>Metric: {data?.height.metricMinHeight} - {data?.height.metricMaxHeight}</p>
            <h5>Life span:</h5>
            <p>{data?.age.minAge} - {data?.age.maxAge} years</p>
            <h5>Temperament: </h5>
            <p>{data?.description.temperament}</p>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant oxa MC
        </Footer>
      </Layout>
    </>
  );
}

export default SobakaInfoCard;