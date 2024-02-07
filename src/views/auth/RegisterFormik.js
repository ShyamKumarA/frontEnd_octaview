import React from 'react';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AuthLogo from "../../layouts/logo/AuthLogo";
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../../store/userSlice';

const RegisterFormik = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const initialValues = {
    UserName: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    txnPassword: '',
    confirmTxnPassword: '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object().shape({
    UserName: Yup.string().required('UserName is required'),
    phone: Yup.string()
      .min(10, 'Phone number must be at least 10 characters')
      .required('Password is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    address: Yup.string().required('Address is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    txnPassword: Yup.string()
      .min(6, 'TxnPassword must be at least 6 characters')
      .required('TxnPassword is required'),
    confirmTxnPassword: Yup.string()
      .oneOf([Yup.ref('txnPassword'), null], 'txnPasswords must match')
      .required('Confirm txnPassword is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
  });

  const handleRegister = async (values, { resetForm }) => {
    try {
      await dispatch(
        addUser({
          id: userId,
          username: values.UserName,
          phone: values.phone,
          email: values.email,
          address: values.address,
          password: values.password,
          confirmPassword: values.confirmPassword,
          transactionPassword: values.txnPassword,
          confirmTxnPassword: values.confirmTxnPassword,
        })
      );
      resetForm();
      toast.success('User registered successfully,User name and Password send to your email');
    } catch (error) {
      toast.error('Failed to register user');
    }
  };
  

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h5 className="mb-0">Register</h5>
                <small className="pb-4 d-block">
                  Already have an account? Login octtaview.com
                </small>
                <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleRegister}
>
  {({ errors, touched }) => (
    <Form>
      <FormGroup>
        <Label htmlFor="UserName">User Name</Label>
        <Field
          name="UserName"
          type="text"
          className={`form-control ${
            errors.UserName && touched.UserName ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage
          name="UserName"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Field
          name="email"
          type="text"
          className={`form-control${
            errors.email && touched.email ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage name="email" component="div" className="invalid-feedback" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Field
          name="phone"
          type="text"
          className={`form-control${
            errors.phone && touched.phone ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage name="phone" component="div" className="invalid-feedback" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="address">Address</Label>
        <Field
          name="address"
          type="text"
          className={`form-control${
            errors.address && touched.address ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage name="address" component="div" className="invalid-feedback" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Field
          name="password"
          type="password"
          className={`form-control${
            errors.password && touched.password ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage
          name="password"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Field
          name="confirmPassword"
          type="password"
          className={`form-control${
            errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage
          name="confirmPassword"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="txnPassword">Transaction Password</Label>
        <Field
          name="txnPassword"
          type="password"
          className={`form-control${
            errors.txnPassword && touched.txnPassword ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage
          name="txnPassword"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirmTxnPassword">Confirm Transaction Password</Label>
        <Field
          name="confirmTxnPassword"
          type="password"
          className={`form-control${
            errors.confirmTxnPassword && touched.confirmTxnPassword ? ' is-invalid' : ''
          }`}
        />
        <ErrorMessage
          name="confirmTxnPassword"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup inline className="form-check">
        <Field
          type="checkbox"
          name="acceptTerms"
          id="acceptTerms"
          className={`form-check-input ${
            errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''
          }`}
        />
        <Label htmlFor="acceptTerms" className="form-check-label">
          Accept Terms & Conditions
        </Label>
        <ErrorMessage
          name="acceptTerms"
          component="div"
          className="invalid-feedback"
        />
      </FormGroup>

      <FormGroup>
        <Button type="submit" color="primary" className="me-2">
          Register
        </Button>
        <Button type="reset" color="secondary">
          Reset
        </Button>
      </FormGroup>
    </Form>
  )}
</Formik>

</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterFormik;
