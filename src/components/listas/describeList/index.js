import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Preço R$',
    dataIndex: 'preco',
    key: 'preco',
    render: (text) => <>R$ {text}</>
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantidade',
    key: 'quantidade',
  },
  {
    title: 'Ação',
    key: 'acao',
    render: (_, record) => (
      <Space size="middle">
        <a>Apagar</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    nome: 'Sabão em pó',
    preco: 32,
    quantidade: 2,
  },
  {
    key: '2',
    nome: 'Amaciante',
    preco: 19.99,
    quantidade: 1,
  },
  {
    key: '3',
    nome: 'Detergente',
    preco: 2.5,
    quantidade: 8,
  },
];

const Describe = () => {
  return <Table columns={columns} dataSource={data} />;
}

export default Describe;