import React, {useState, useEffect} from "react";
import axios from 'axios'
import Header from "./Header";
import Card from "./Card";
import { Link } from 'react-router-dom'
import { Input } from 'antd';


const Main = () => {
const [data, setData] = useState([])
const [filter, setFilter] = useState([])
const [search, setSearch] = useState('')

const { Search } = Input;
const onSearch = (value) => setSearch(value);

useEffect(()=>{
    let re = new RegExp(search, 'gim');
    let filtered = data.filter(id => re.test(id.title))
    setFilter(filtered)

    
},[search])



    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setFilter(res.data)
            setData(res.data)
        })
      },[])


  return (
    <div>
        <Header />
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    {filter.map((id, title) =>{
        return(
        <Link to={'/store/' + String(title)}>
        <Card key={title} title={id.title} description={id.description} image={id.image} />
        </Link>
        )

        })
        }

    </div>
  )
}

export default Main
