import CardList from '../cardList'
import {Link} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';

let urlPic = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
let baseURL = "http://127.0.0.1:8080"

const ShowLists = () => {

  const [listas, setListas] = useState([])

  useEffect(() => {
    carregarDados()
  })

  const carregarDados = async () => {
    let response = await axios.get(baseURL+"/api/lista_mercado/all")
    response = response.data
    
    response = response.map(el => {
      return {
        key: el.id,
        nome: el.nome
      }
    })

    setListas(response)
  }

  return (
    <>
       <h1>Listas Cadastradas</h1>
       <div style ={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {
            listas.map(el => {
              return <Link to={`/describe-list/${el.key}`} relative="/"> <CardList key={el.id} lista={el}/> </Link>
            })
          }
        </div>
    </>
   
  )
};
export default ShowLists;