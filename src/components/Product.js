import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "antd";
import { Image } from "antd";
import { Descriptions } from "antd";
const { Title } = Typography;
const Product = () => {
  const { id: ProdId } = useParams();
  const [data, setData] = useState();

  let id = +ProdId + 1;
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Title>{data?.title}</Title>
      <Image width="200" height="200" src={data?.image} />
      <Descriptions title="Descriptions">
        <Descriptions.Item label="Description">
          {data?.descriptions}
        </Descriptions.Item>
        <Descriptions.Item label="Price">{data?.price}</Descriptions.Item>
        <Descriptions.Item label="Category">{data?.category}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Product;
