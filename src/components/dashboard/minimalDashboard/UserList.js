/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Input, Modal, ModalHeader, Table } from 'reactstrap';
import { userListManage } from '../../../store/userSlice';
import AddUser from './AddUser';

const UserList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.userListManageReducer);
  const [selectedChild, setSelectedChild] = useState('child1');
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(userListManage());
  }, [dispatch]);

  const getChildData = () => {
    if (!data) return [];
    return data[selectedChild] || [];
  };

  const toggle = () => {
    setModal(!modal);
  };

  const filteredData = getChildData().filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">Users Overview</CardTitle>
          </div>
          <div className="mt-4 mt-md-0">
            <Input
              type="select"
              className="custom-select"
              value={selectedChild}
              onChange={e => setSelectedChild(e.target.value)}
            >
              <option value="child1">Level 1</option>
              <option value="child2">Level 2</option>
              <option value="child3">Level 3</option>
            </Input>
          </div>
        </div>
      </CardBody>
      <CardBody className="bg-light d-flex align-items-center justify-content-between">
        <div className="mt-4 mt-md-0">
          <div className="p-3 border-bottom">
            <Button color="danger" block onClick={toggle}>
              Add New
            </Button>
          </div>
        </div>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </CardBody>
      <div className="table-responsive">
        <Table className="text-nowrap align-middle mb-0" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Package</th>
              <th>Mobile</th>
              <th>Sponsor</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((tdata, index) => (
              <tr key={tdata._id} className="border-top">
                <td>
                  <h6 className="mb-0">{index + 1}</h6>
                </td>
                <td>
                  <h6 className="mb-0">{tdata.username}</h6>
                </td>
                <td><h6 className="mb-0">{tdata.packageName}</h6></td>
                <td><h6 className="mb-0">{tdata.phone}</h6></td>
                <td><h6 className="mb-0">{tdata.ownSponserId}</h6></td>

                <td>
                  <Link
                    to={`/users-tree-list/${tdata._id}`}
                    className="hidden xs:block ml-2"
                  >
                    <Button className="btn" color="success">
                      View Tree
                    </Button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/user-profile/${tdata._id}`}
                    className="hidden xs:block ml-2"
                  >
                    <Button className="btn" color="info">
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalHeader toggle={toggle}>Add Contact</ModalHeader>
        <AddUser click={toggle} />
      </Modal>
    </Card>
  );
};

export default UserList;
