import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'
import DescribeList from './describeList'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Listas = () => {
  let { id } = useParams();
  let [lista, setLista] = useState([]);
  
  useEffect(() => {
    buscaLista();
  }, [])

  const buscaLista = async () => {
    let base_url = "http://localhost:8080/api"
    let response = await axios.get(base_url + `/lista_mercado/${id}`)
    setLista(response.data)
  }

  return (
    <div style={{
      font: "roboto",
      margin: 30
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <h1>{lista.nome}</h1>
      </div>
      
      <DescribeList data={lista.items} showApagar={false}></DescribeList>
    </div>
  );
}

export default Listas;
