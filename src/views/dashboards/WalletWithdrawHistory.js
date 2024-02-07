import { Row, Col } from 'reactstrap';
import HistoryWalletWithdraw from '../../components/dashboard/minimalDashboard/HistoryWalletWithdraw';


const WalletWithdrawHistory = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <HistoryWalletWithdraw />
        </Col>
      </Row>
      
    </>
  );
};

export default WalletWithdrawHistory;