import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const SobakaCard = ({ title, description, src, index }) => (
  <Link to={"/sobaka/" + index}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Link>
);

export default SobakaCard;