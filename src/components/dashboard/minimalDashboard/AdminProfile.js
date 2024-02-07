/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import Iframe from 'react-iframe';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { adminProfileManage, editProfileManage } from '../../../store/profileSlice';
import img1 from '../../../assets/images/users/user1.jpg';
import 'react-toastify/dist/ReactToastify.css';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('2');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    txnPassword: '',
    phone: '',
    country: 'India',
  });

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.adminProfileManageReducer);

  useEffect(() => {
    dispatch(adminProfileManage());
  }, [dispatch]);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


  const acceptHandler = async (id) => {
    try {
      await dispatch(editProfileManage({ id, formData }));
      // Reset form values
      setFormData({
        name: '',
        email: '',
        address: '',
        password: '',
        txnPassword: '',
        phone: '',
        country: 'India',
      });

      // Show success toast
      toast.success('User profile updated successfully.');

    } catch (error) {
      // Show error toast
      toast.error('Failed to update user profile. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <>
      
      <Row>
        <Col xs="12" md="12" lg="4">
          <Card>
            <CardBody className="p-4">
              <div className="text-center mt-4">
                <img src={img1} className="rounded-circle" width="150" alt="" />
                <CardTitle tag="h4" className="mt-2 mb-0">
                Admin
                </CardTitle>
                <CardSubtitle className="text-muted">{data && data.name}</CardSubtitle>
                <Row className="text-center justify-content-md-center mt-3">
                  <Col xs="4">
                    <a href="/" className="text-dark fw-bold text-decoration-none">
                      <i className="bi bi-person text-muted"></i>
                      <span className="font-medium ms-2">{data&&data.myDownline}</span>
                    </a>
                  </Col>
                  <Col xs="4">
                    <a href="/" className="text-dark fw-bold text-decoration-none">
                      <i className="bi bi-columns text-muted"></i>
                      <span className="font-medium ms-2">54</span>
                    </a>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <CardBody className="border-top p-4">
              <div>
                <CardSubtitle className="text-muted fs-5">Email address</CardSubtitle>
                <CardTitle tag="h4">{data && data.email}</CardTitle>

                <CardSubtitle className="text-muted fs-5 mt-3">Phone</CardSubtitle>
                <CardTitle tag="h4">{data && data.phone}</CardTitle>

                <CardSubtitle className="text-muted fs-5 mt-3">Address</CardSubtitle>
                <CardTitle tag="h4">{data && data.address}</CardTitle>
                <div>
                  <Iframe
                    className="position-relative"
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                    width="280"
                    height="150"
                    frameborder="0"
                    allowfullscreen
                  />
                </div>
                <CardSubtitle className="text-muted fs-5 mt-3 mb-2">Social Profile</CardSubtitle>
                <div className="d-flex align-items-center gap-2">
                  <Button className="btn-circle" color="info">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button className="btn-circle" color="success">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button className="btn-circle" color="danger">
                    <i className="bi bi-youtube"></i>
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12" lg="8">
          <Card>
            <Nav tabs>
              
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Setting
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <div className="p-4">
                      <Row>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Full Name</strong>
                          <br />
                          <p className="text-muted">{data && data.name}</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Mobile</strong>
                          <br />
                          <p className="text-muted">{data && data.phone}</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Email</strong>
                          <br />
                          <p className="text-muted">{data && data.email}</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Location</strong>
                          <br />
                          <p className="text-muted">India</p>
                        </Col>
                      </Row>
                      <h4 className="font-medium mt-4"><strong> Detailed view</strong></h4> 
                      <hr />
                      <h5 className="mt-4">
                      Wallet Amount <span className="float-end">{data && data.totalIncome}</span>
                      </h5>
                      <hr />
                      <h5 className="mt-4">
                      DailyBonus <span className="float-end">{data && data.dailyBonus}</span>
                      </h5>
                      <hr />
                      <h5 className="mt-4">
                      LevelRoi <span className="float-end">{data && data.levelRoi}</span>
                      </h5>
                      <hr />
                      <h5 className="mt-4">
                      capitalAmount <span className="float-end">{data && data.capitalAmount}</span>
                      </h5>
                      <hr />

                      <h5 className="mt-4">
                       Direct Income <span className="float-end">{data && data.directIncome}</span>
                      </h5>
                      <hr />

                      <Progress color="warning" value={100} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <div className="p-4">
                    <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="name" name="username" value={formData.name} placeholder={data && data.name} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} placeholder={data && data.email} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input type="text" name="address" value={formData.address} placeholder={data && data.address} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Change Password</Label>
          <Input type="text" name="password" value={formData.password} placeholder="******" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Change Txn Password</Label>
          <Input type="text" name="txnPassword" value={formData.txnPassword} placeholder="******" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Phone No</Label>
          <Input type="text" name="phone" value={formData.phone} placeholder={data && data.phone} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Select Country</Label>
          <Input type="select" name="country" value={formData.country} onChange={handleInputChange}>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="America">America</option>
          </Input>
        </FormGroup>
        <Button color="primary" onClick={() => acceptHandler(data && data.id)}>Update Profile</Button>
      </Form>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdminProfile;
