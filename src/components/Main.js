import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import ModalCard from "./ModalCard";

const Main = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const { Search } = Input;
  const onSearch = (value) => setSearch(value);

  const showModal = () => {
    console.log(mainFilter)
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const noAction = () => {
    setModal(false);
  };

  useEffect(() => {
    let re = new RegExp(search, "gim");
    let filtered = data.filter((id) => re.test(id.title));
    setFilter(filtered);
  }, [search]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setFilter(res.data);
      setData(res.data);
    });
  }, []);
  // console.log(filter)
  const mainFilter = filter.map((item) => {
    // console.log(typeof index)
    return (
      <>
        <Link to={"/store/" + item.id}>
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        </Link>
        <Button onClick={showModal}>...</Button>
      </>
    );
  });

  return (
    <div>
      <Header />
      <Search
        placeholder="search"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className="items">{mainFilter}</div>
      <ModalCard visible={modal} onCancel={hideModal} onOk={noAction} />
    </div>
  );
};

export default Main;
