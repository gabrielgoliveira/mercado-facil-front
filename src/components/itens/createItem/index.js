import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

const onFinish = (values) => {
  console.log('Success:', values);

  let data = {
    nome: values.nome,
    preco: values.preco,
    listaMercado: id
  }

  console.log(data)
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

let id;

const url = "http://localhost:8080/api/item/criar"

function FormProduct({lista_id}) {
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  let id = lista_id;

  const onChangeValue = (value) => {
    console.log(value.target.value)
  }

  const onChangeName = (value) => {
    console.log(value.target.value)
  }

  return (
    <div style = {{
      display: "flex",
      justifyContent: "center"
    }}>
      <Form
        name="basic"
        style={{
          maxWidth: 600,
          backgroundColor: "#f1f1f1",
          padding: 30,
          borderRadius: 20,
          marginTop: "10%"
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nome" name="nome" >
          <Input value={nome} onChange={onChangeName}/>
        </Form.Item>

        <Form.Item label="Valor R$" name="valor" >
          <Input value={valor} onChange={onChangeValue}/>
        </Form.Item>

        <Form.Item label="Quantidade" name="qtd" >
          <Input value={quantidade}/>
        </Form.Item>

        
        <Form.Item>
          <Button type="primary" htmlType="submit"> Gravar </Button>
        </Form.Item>
      </Form>

    </div>
  );
}

export default FormProduct;