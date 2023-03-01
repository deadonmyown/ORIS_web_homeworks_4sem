import { Image } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import { useParams } from 'react-router';
import { useState } from "react";
import { useEffect } from "react";
const { Header, Content, Footer } = Layout;


const SobakaInfoCard = ({sobakaInfo}) => {
  //react i js polnoe govno
  // const params = useParams(info);
  // const breedId = params.sobakaId;
  // const [sobakaInfo, setData] = useState();
  // const [sobakaImg, setImg] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const requestOptions = {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'x-api-key': 'live_YYu7aVxIwkuT6zzYPiZhDbgca61a32FEKYnlRn1zPpaX1KFt4pJdOPjFj4ptlBIZ'
  //         },
  //       };

  //       fetch(`https://api.thedogapi.com/v1/breeds/${breedId}`, requestOptions)
  //       .then(response => response.json())
  //       .then(data => setData(data));

  //       // const responseBreed = await fetch(
  //       //   `https://api.thedogapi.com/v1/breeds/${breedId}`, requestOptions
  //       // );
  //       // if (!responseBreed.ok) {
  //       //   throw new Error(
  //       //     `This is an HTTP error: The status is ${responseBreed.status}`
  //       //   );
  //       // }
  //       // let actualData = await responseBreed.json();
  //       // setData(actualData);
  //       const imgId = sobakaInfo.reference_image_id;

  //       fetch(`https://api.thedogapi.com/v1/images/${imgId}`, requestOptions)
  //       .then(response => response.json())
  //       .then(data => setImg(data));
  //       // const responseImg = await fetch(
  //       //   `https://api.thedogapi.com/v1/images/${imgId}`, requestOptions
  //       // );
  //       // if (!responseImg.ok) {
  //       //   throw new Error(
  //       //     `This is an HTTP error: The status is ${responseImg.status}`
  //       //   );
  //       // }
  //       // let actualImg = await responseImg.json();
  //       // setImg(actualImg);

  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //       setImg(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getData()
  // }, [])

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <div class="img-holder">
        <Image
          style={{ verticalAlign: 'middle', }}
          width={sobakaInfo.image.width}
          height={sobakaInfo.image.height}
          src={sobakaInfo.image.url}
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
            <Breadcrumb.Item>{sobakaInfo.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <p>
              Weight:
              Imperial: {sobakaInfo.weight.imperial}
              Metric: {sobakaInfo.weight.metric}
            </p>
            <p>
              Height:
              Imperial: {sobakaInfo.height.imperial}
              Metric: {sobakaInfo.height.metric}
            </p>
            <p>
              Life span: {sobakaInfo.life_span}
            </p>
            <p>
              Temperament: {sobakaInfo.temperament}
            </p>
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