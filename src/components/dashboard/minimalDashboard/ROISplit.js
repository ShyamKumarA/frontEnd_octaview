import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Card,
  CardBody,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { splitRoi } from '../../../store/roiSlice';
import ComponentCard from '../../ComponentCard';

const BasicForm = () => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState('');
  const [modal, setModal] = useState(false);
  const [validationModal, setValidationModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleValidationModal = () => setValidationModal(!validationModal);
  const toggleSuccessModal = () => setSuccessModal(!successModal);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidPercentage = parseFloat(percentage) >= 0.4 && parseFloat(percentage) <= 1.4;
    console.log(percentage);
    if (isValidPercentage) {
      toggleModal();
      dispatch(splitRoi(percentage));
    } else {
      toggleValidationModal();
    }
  };

  return (
    <Card>
      <CardBody>
        <>
          <ComponentCard title={<span style={{ color: 'Black', fontWeight: 'bold' }}>Split Todays ROI</span>}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="percentageInput">Enter your percentage between 0.4 to 1.4</Label>
                <Input
                  type="number"
                  step="0.01"
                  name="percentage"
                  id="percentageInput"
                  placeholder="Enter percentage"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  required
                  style={{ width: '200px' }} // Reduced length of the text box
                />
              </FormGroup>
              <Button color="primary" type="submit" size="lg">
                Submit
              </Button>
            </Form>
          </ComponentCard>

          {/* Confirmation Modal */}
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Confirmation</ModalHeader>
            <ModalBody>
              Your percentage is: {percentage}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {toggleModal(); toggleSuccessModal();}}>
                OK
              </Button>
            </ModalFooter>
          </Modal>

          {/* Validation Error Modal */}
          <Modal isOpen={validationModal} toggle={toggleValidationModal}>
            <ModalHeader toggle={toggleValidationModal}>Validation Error</ModalHeader>
            <ModalBody>
              Please enter a valid percentage between 0.4 and 1.4.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleValidationModal}>
                OK
              </Button>
            </ModalFooter>
          </Modal>

          {/* Success Modal */}
          <Modal isOpen={successModal} toggle={toggleSuccessModal}>
            <ModalHeader toggle={toggleSuccessModal}>ROI Split Successful</ModalHeader>
            <ModalBody>
              Your ROI has been successfully split.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleSuccessModal}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </CardBody>
    </Card>
  );
};

export default BasicForm;
