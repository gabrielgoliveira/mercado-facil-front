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

function FormList() {
  const [nome, setNome] = useState("")


  return (
    <div style = {{
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
          width: "50%",
          height: "25%",
          maxWidth: 600,
          backgroundColor: "#f1f1f1",
          padding: 50,
          borderRadius: 6,
          marginTop: "15%",
          borderWidth: 1,
          borderColor: "black"
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nome" name="nome" >
          <Input value={nome} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"> Gravar </Button>
        </Form.Item>
      </Form>

    </div>
    
  );
}

export default FormList;