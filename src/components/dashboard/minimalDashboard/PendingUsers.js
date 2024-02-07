/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Input, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ModalImage from 'react-modal-image';
import { AcceptUserManage,RejectUserManage, userManage } from '../../../store/userSlice';

const PendingUsers = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userManageReducer);
  const { data: acceptData } = useSelector((state) => state.AcceptUserManageReducer);
  const { data: rejectData } = useSelector((state) => state.RejectUserManageReducer);

  console.log(rejectData);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(userManage());
  }, [dispatch, acceptData]);

  const acceptHandler = (id) => {
    setSelectedUserId(id);
    setShowConfirmationModal(true);
  };
  const rejectHandler = (id) => {
    dispatch(RejectUserManage(id));
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmAcceptance = () => {
    dispatch(AcceptUserManage(selectedUserId));
    setShowConfirmationPopup(true);
    setShowConfirmationModal(false);
  };

  const handlePopupClose = () => {
    setShowConfirmationPopup(false);
  };


  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">Pending Users</CardTitle>
          </div>
          <div className="mt-4 mt-md-0">
            <Input type="select" className="custom-select">
              <option value="0">Monthly</option>
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Yearly</option>
            </Input>
          </div>
        </div>
      </CardBody>
      <CardBody className="bg-light d-flex align-items-center justify-content-between">
       
      </CardBody>
      <div className="table-responsive">
        <Table className="text-nowrap align-middle mb-0" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Document</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.userData.map((tdata, index) => (
              <tr key={tdata.email} className="border-top">
                <td>
                  <h6 className="mb-0">{index+1}</h6>
                </td>
                <td>
                  <h6 className="mb-0">{tdata.username}</h6>
                </td>
                <td>
                  <h6 className="mb-0">{tdata.phone}</h6>
                </td>
                <td
                      className="mb-0"
                    >
                      
                      { tdata && (
                        <div style={{ width: "80px" }}>
                          <ModalImage
                          
                          small={`http://localhost:4001/uploads/${tdata.aadhaar}`}
                          large={`http://localhost:4001/uploads/${tdata.aadhaar}`}
                            alt="screenshot"
                          />
                        </div>
                      ) }
                    </td>
                <td>
                <Button className="btn m-2"  color="success" onClick={() => acceptHandler(tdata._id)}>
                
                Accept
              </Button>
              <Button className="btn" color="danger" onClick={() => rejectHandler(tdata._id)}>
                Reject
              </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
       {/* Confirmation Modal */}
       <Modal isOpen={showConfirmationModal} toggle={handleCloseConfirmationModal}>
        <ModalHeader toggle={handleCloseConfirmationModal}>Confirm Acceptance</ModalHeader>
        <ModalBody>
          Are you sure you want to accept this user?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCloseConfirmationModal}>Cancel</Button>
          <Button color="success" onClick={handleConfirmAcceptance}>Confirm</Button>
        </ModalFooter>
      </Modal>

      {/* Confirmation Popup */}
      <Modal isOpen={showConfirmationPopup} toggle={handlePopupClose}>
        <ModalBody>
          User accepted successfully!
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handlePopupClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};

export default PendingUsers;
