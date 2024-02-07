import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import user1 from '../../../assets/images/users/user2.jpg';
import { addUser } from '../../../store/userSlice';

const AddUser = ({ click }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    txnPassword: '',
    confirmTxnPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (values.password !== values.confirmPassword || values.txnPassword !== values.confirmTxnPassword) {
      alert('Passwords do not match.');
      return;
    }

    const userPayload = {
      username: values.name,
      phone: values.phone,
      email: values.email,
      address: values.address,
      password: values.password,
      transactionPassword: values.txnPassword,
      confirmPassword: values.confirmPassword,
      confirmTxnPassword: values.confirmTxnPassword,
    };

    // Dispatch addUser action
    try {
      await dispatch(addUser(userPayload));
      // Reset form values
      setValues({
        name: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        txnPassword: '',
        confirmTxnPassword: '',
      });

      // Show success toast
      toast.success('User added successfully. Username and password sent to your email.');
    } catch (error) {
      // Show error toast
      toast.error('Failed to add user. Please try again.');
    }

    // Close modal or perform other necessary actions
    click();
  };

  return (
    <Form onSubmit={handleSubmit}>
    <ModalBody>
      <Row>
        <Col md={6} className="text-center">
          <img src={user1} className="rounded-circle" alt={user1} width="100" />
        </Col>
        <Col md={6}>
            <FormGroup>
              <Label for="firstName">Name</Label>
              <Input
                className="form-control"
                type="text"
                name="username"
                id="firstname"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                className="form-control"
                type="phone"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
              <Label for="address">Address</Label>
              <Input
                className="form-control"
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={(e) => setValues({ ...values, address: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Txn Password</Label>
              <Input
                className="form-control"
                type="password"
                name="txnPassword"
                id="txnPassword"
                value={values.txnPassword}
                onChange={(e) => setValues({ ...values, txnPassword: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Confirm Password</Label>
              <Input
                className="form-control"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="notes">Confirm txnPassword</Label>
              <Input
                className="form-control"
                type="password"
                name="confirmTxnPassword"
                id="confirmTxnPassword"
                value={values.confirmTxnPassword}
                onChange={(e) => setValues({ ...values, confirmTxnPassword: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          disabled={
            values.name.length === 0 ||
            values.confirmTxnPassword.length === 0 ||
            values.password !== values.confirmPassword ||
            values.txnPassword !== values.confirmTxnPassword
          }
        >
          Add Contact
        </Button>
      </ModalFooter>
    </Form>
  );
};

AddUser.propTypes = {
  click: PropTypes.any,
};

export default AddUser;