import { Row, Col } from 'reactstrap';
import HistoryAddFund from '../../components/dashboard/minimalDashboard/HistoryAddFund';


const AddFundHistory = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <HistoryAddFund />
        </Col>
      </Row>
      
    </>
  );
};

export default AddFundHistory;