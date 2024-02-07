import { Row, Col } from 'reactstrap';
import PendingCapitalWithdraw from '../../components/dashboard/minimalDashboard/PendingCapitalWithdraw';


const CapitalWithdrawPending = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <PendingCapitalWithdraw />
        </Col>
      </Row>
      
    </>
  );
};

export default CapitalWithdrawPending;
