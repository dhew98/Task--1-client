import React, { useState } from 'react';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

    const handleSubmit=(event)=>{
      const currentDate = new Date().toISOString();
      event.preventDefault();
      const form = event.target;
      const  userID= form.userID.value;
      const deviceID = form.deviceID.value;
      const queryText=form.queryText.value;

      const payload = {
        userID,
        date: currentDate,
        deviceID,
        queryText,
      };


      fetch( 'http://localhost:5000/support/create_ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          Swal.fire("Check the Console!");
        })
        .catch(error => {
          console.error(error);
        });
        event.target.reset();
    }
   

  return (
    <div className="App">

<Form onSubmit={handleSubmit} className=" w-25 mx-auto my-5">
                       <Form.Group className="mb-3" controlId="formUserID">
        <Form.Label>User ID</Form.Label>
        <Form.Control
          name="userID"
          type="text"
          placeholder="Enter User ID"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDeviceID">
        <Form.Label>Device ID</Form.Label>
        <Form.Control
          name="deviceID"
          type="text"
          placeholder="Enter Device ID"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formQueryText">
        <Form.Label>Query Text</Form.Label>
        <Form.Control
          name="queryText"
          as="textarea"
          rows={3}
          placeholder="Enter Query Text"
          required
        />
      </Form.Group>
      <Button type='submit' className='w-100 fw-bold' variant="primary" size="lg" >
                            Create Ticket 
      </Button>
      </Form>
    </div>
  );
}

export default App;
