import { Card } from 'antd';
const { Meta } = Card;


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
      
      cover={<img alt="example" src={lista.picUrl} />}
    >
      <Meta title= {lista.nome} onClick={abrirLista} />
    </Card>
  )
};
export default ShowLists;