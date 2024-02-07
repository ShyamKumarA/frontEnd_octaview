/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Input, Table } from 'reactstrap';
import { addFundHistoryManage} from '../../../store/reportSlice';


const HistoryAddFund = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.addFundHistoryManageReducer);
  

  useEffect(() => {
    dispatch(addFundHistoryManage());
  }, [dispatch])
  


  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">Fund Add History</CardTitle>
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
              <th>Date</th>
              <th>Amount</th>
              <th>Txn ID</th>
              <th>Txn Url</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.allAddFundHistory.map((tdata, index) => (
              <tr key={tdata.email} className="border-top">
                <td>
                  <h6 className="mb-0">{index+1}</h6>
                </td>
                <td>
                  <h6 className="mb-0">{tdata.name}</h6>
                </td>
                <td>{tdata.createdAt}</td>
                <td>{tdata.topUpAmount}</td>
                <td>{tdata.transactionCode}</td>
                <td>{tdata.addFundUrl}</td>
                <td>{tdata.status}</td>
                <td>
                <Link
                                to={`/user-profile/${tdata._id}`}
                                className="hidden xs:block ml-2"
                              >
              <Button className="btn "  color="info">
                View Details
              </Button>
              </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default HistoryAddFund;