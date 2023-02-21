import { Card } from 'antd';
const { Meta } = Card;
let urlPic = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

const ShowLists = ({lista}) => {
  
  const abrirLista = () => {
    console.log("oi")
  }

  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: 30
      }}
      
      cover={<img alt="example" src={urlPic} />}
    >
      <Meta title= {lista.nome} onClick={abrirLista} />
    </Card>
  )
};
export default ShowLists;