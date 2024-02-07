import { Row, Col } from 'reactstrap';
import ROISplit from '../../components/dashboard/minimalDashboard/ROISplit';
import ROIHistory from '../../components/dashboard/minimalDashboard/ROIHistory';


const UserROISplit = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <ROISplit />
          <ROIHistory/>
        </Col>
      </Row>
      
    </>
  );
};

export default UserROISplit;