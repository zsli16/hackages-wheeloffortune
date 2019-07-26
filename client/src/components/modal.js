import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const useForm = (props) => {

  const [values, setValues] = useState('');

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (values == process.env.REACT_APP_ADMIN_PASSWORD) {
      props.onHide()
      props.clearParticipants()
    } else {
      console.log('wrong password entered:', values)
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues(event.target.value)
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

function AdminModal(props) {
  const { values, handleChange, handleSubmit } = useForm(props);
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to start over?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>This will erase all users who have signed up for the current wheel.</h5>
        <p>
          Please enter the admin password below
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Control onChange={handleChange} value={values} type="password" placeholder="Password" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>Clear Wheel</Button>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminModal