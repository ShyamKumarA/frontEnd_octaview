/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Input, Table } from 'reactstrap';
import { AcceptTopups, topupManage,Rejectpackage } from '../../../store/packageSlice';


const PendingTopUp = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.topupManageReducer);
  const { data:acceptData } = useSelector((state) => state.acceptTopupReducer);
  const { data:rejectData } = useSelector((state) => state.rejectPackageReducer);


  useEffect(() => {
    dispatch(topupManage());
  }, [dispatch, acceptData,rejectData])
  
const acceptHandler=(id)=>{
  dispatch(AcceptTopups(id))
}

const rejectHandler=(id)=>{
  dispatch(Rejectpackage(id))
}

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">Pending TopUp</CardTitle>
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
              <th>Date</th>
              <th>Tnx ID</th>
              <th>Wallet Url</th>
              <th>Amount</th>
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
                <td>{tdata.phone}</td>
                <td>{tdata.createdAt}</td>
                <td>{tdata.transactionCode}</td>
                <td>{tdata.addFundUrl}</td>

                <td>{tdata.topUpAmount}</td>
                <td>
                <Button className="btn m-2" onClick={() => acceptHandler(tdata._id)} color="success">
                Accept
              </Button>
              <Button className="btn" onClick={() => rejectHandler(tdata._id)} color="danger">
                Reject
              </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default PendingTopUp;