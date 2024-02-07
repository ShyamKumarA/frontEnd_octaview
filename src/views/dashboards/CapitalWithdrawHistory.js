import { Row, Col } from 'reactstrap';
import HistoryCapitalWithdraw from '../../components/dashboard/minimalDashboard/HistoryCapitalWithdraw';


const CapitalWithdrawHistory = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <HistoryCapitalWithdraw />
        </Col>
      </Row>
      
    </>
  );
};

export default CapitalWithdrawHistory;