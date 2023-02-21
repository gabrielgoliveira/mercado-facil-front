import DescribeList from './describeList'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Listas = () => {
  return (
    <div style={{
      font: "roboto"
    }}>
      
      <h1>Lista de Compra X</h1>
      <Button icon={<PlusOutlined />}>
        Cadastrar novo produto
      </Button>
      <DescribeList></DescribeList>
    </div>
  );
}

export default Listas;
