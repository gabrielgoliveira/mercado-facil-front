import CardList from '../cardList'
import {Link} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';

let urlPic = [
  "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://plus.unsplash.com/premium_photo-1661767105568-0ae3cbbeea3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632507399767-207074cde63a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let baseURL = "http://127.0.0.1:8080"

const ShowLists = () => {

  const [listas, setListas] = useState([])

  useEffect(() => {
    carregarDados()
  }, [])

  const carregarDados = async () => {
    let response = await axios.get(baseURL+"/api/lista_mercado/all")
    response = response.data
    
    response = response.map(el => {
      let pic = getRandomInt(0, 5)
      return {
        key: el.id,
        nome: el.nome,
        picUrl: urlPic[pic]
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