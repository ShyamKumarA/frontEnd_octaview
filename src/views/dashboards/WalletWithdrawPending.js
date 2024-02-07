import { Row, Col } from 'reactstrap';
import PendingWalletWithdraw from '../../components/dashboard/minimalDashboard/PendingWalletWithdraw';


const WalletWithdrawPending = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <PendingWalletWithdraw />
        </Col>
      </Row>
      
    </>
  );
};

export default WalletWithdrawPending;