/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Card, CardBody, CardTitle, Input, Table } from 'reactstrap';
import {splitRoiHistory  } from '../../../store/roiSlice';




const ROIHistory = () => {


    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.splitRoiHistoryReducer);

    useEffect(() => {
        dispatch(splitRoiHistory());
      }, [dispatch])
      
      const formatDate = (timestamp) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const formattedDate = new Date(timestamp).toLocaleDateString('en-US', options);
        return formattedDate;
      };
      


  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">ROI Percentage History</CardTitle>
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
              <th>Date</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.dailyROIHistory.map((tdata,index) => (
              <tr key={tdata.id} className="border-top">
                <td>
                  <h6 className="mb-0">{index+1}</h6>
                </td>
                <td>
  <h6 className="mb-0">{formatDate(tdata.createdAt)}</h6>
</td>
                <td>{tdata.percentage}</td>
                <td>
                    <Badge color="success" pill>Approved</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default ROIHistory;
