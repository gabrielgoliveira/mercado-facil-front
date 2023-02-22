import { Space, Table, Tag } from 'antd';


const Describe = ({data, apagar}) => {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Preço R$',
      dataIndex: 'preco',
      key: 'preco',
      render: (text) =>  <p>R$ {text}</p>
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
          <a onClick={() => {
            apagar(record)
          }}>Apagar</a>
        </Space>
      ),
    },
  ];
  
  return <Table columns={columns} dataSource={data} />;
}

export default Describe;