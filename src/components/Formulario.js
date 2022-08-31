import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const emailRegExp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRegExp.test(email))
    if(nombre.trim() === '' || !emailRegExp.test(email)){
        <Alert variant='danger'>'Los datos no son validos'</Alert>
        return;
    }else{
        setNombre(''); setEmail('');
        alert(`El nombre cargado es: ${nombre} email: ${email}`)
    }
    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
  };

  return (
    <div className="container text-light my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" value={nombre} nombre={nombre} onChange={e => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el apellido" value={apellido} apellido={apellido} onChange={e => setApellido(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="number" placeholder="Ingrese el dni" value={dni} dni={dni} onChange={e => setDni(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese email" value={email} email={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="outline-light" type="submit" className="my-3">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
