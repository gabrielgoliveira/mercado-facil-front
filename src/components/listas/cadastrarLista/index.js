import { Button, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import axios from "axios";
import TableItens from "../describeList"
import { PlusOutlined, SmileOutlined } from '@ant-design/icons';

let baseURL = "http://127.0.0.1:8080"


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


function FormList() {

  const [nome, setNome] = useState("")
  const [preco, setpreco] = useState(0);
  const [quantidade, setquantidade] = useState(0);

  const [api, contextHolder] = notification.useNotification();
  const [itens, setItens] = useState([])
  const [nomeLista, setNomeLista] = useState("");

  const addItem = (item) => {
    let id_interno = itens.length
    setItens([...itens, {
      ...item,
      key: id_interno
    }])
  }

  const gravarLista = async () => {
    try {
      let data = {
        nome: nomeLista,
        items: itens.map(el => {
          return {
            nome: el.nome,
            quantidade: el.quantidade,
            preco: el.preco,
            peso: 0
          }
        })
      }

      let response = await axios.post(baseURL + '/api/lista_mercado/criar', data)

      api.open({
        message: 'Lista Gravada com Sucesso',
        description: 'Sua lista foi gravada',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });

    } catch (e) {
      throw e;
    }
  }
  const apagar = (record) => {
    var filtered = itens.filter(function (value, index, arr) {
      return index != record.key;
    });

    let i = 0;
    filtered = filtered.map(element => {
      element.key = i;
      i++;
      return element
    })

    setItens(filtered)
  }

  const atualizaNomeLista = (value) => {
    let str = value.target.value
    setNomeLista(str)
  }
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginRight: 20,
        padding: 10
      }}>
        <Form>
          <Form.Item label="Nome Lista: " name="nome" >
            <Input value={nomeLista} onChange={atualizaNomeLista}/>
          </Form.Item>
        </Form>

        <>
          {contextHolder}
          <Button
            icon={<PlusOutlined />}
            onClick={gravarLista}
          >
            Cadastrar novo produto
          </Button>
        </>

      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
      }}>
        <Form
          name="basic"
          style={{
            maxWidth: 600,
            backgroundColor: "#f1f1f1",
            padding: 30,
            borderRadius: 20,
            marginTop: 10
          }}
          onFinish={addItem}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Nome" name="nome" >
            <Input value={nome} />
          </Form.Item>

          <Form.Item label="Valor R$" name="preco" >
            <Input value={preco} />
          </Form.Item>

          <Form.Item label="Quantidade" name="quantidade" >
            <Input value={quantidade} />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit"> Gravar </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{
        margin: 30
      }}>
        <TableItens
          data={itens}
          apagar={apagar}
          showApagar={true}
        />
      </div>

    </>
  );
}

export default FormList;