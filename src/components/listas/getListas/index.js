import CardList from '../cardList'
import {Link} from 'react-router-dom';

let urlPic = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

const ShowLists = () => {
  
  let listas = [
    {
      nome: 'Lista 1'
    },
    {
      nome: 'Lista 2'
    },
    {
      nome: 'Lista 3'
    }
  ];

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
              return <Link to="/describe-list" relative="/"> <CardList lista={el}/> </Link>
            })
          }
        </div>
    </>
   
  )
};
export default ShowLists;