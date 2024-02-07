import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Progress, CardBody } from 'reactstrap';
import * as Icon from 'react-feather';
import { revenueCardManage } from '../../../store/revenueCardSlice';









const RevenueCards = () => {

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.revenueCardManageReducer);
  console.log(data);

  const totalMembers=data && data.totalMembers;
  const todaysUserCount=data && data.todaysUserCount;
  const totalDailyROI=data && data.totalDailyROI;
  const pendingUsersCount=data && data.pendingUsersCount;


  const revenues = [
    {
      id: 1,
      icon: Icon.Users,
      title: 'My New Clients',
      earn: todaysUserCount,
      color: 'primary',
    },
    {
      id: 2,
      icon: Icon.Edit,
      title: 'Total Members',
      earn: totalMembers,
      color: 'cyan',
    },
    {
      id: 3,
      icon: Icon.FileText,
      title: 'Total ROI',
      earn: totalDailyROI,
      color: 'purple',
    },
    {
      id: 4,
      icon: Icon.ShoppingBag,
      title: 'Not verified',
      earn: pendingUsersCount,
      color: 'warning',
    },
  ];
  

useEffect(() => {
  dispatch(revenueCardManage());
}, [dispatch])



  return (
    <Card>
      <Row>
        {revenues.map((item) => (
          <Col lg="3" md="6" className="border-end" key={item.id}>
            <CardBody>
              <div className="d-flex align-items-center">
                <div>
                  <item.icon className="text-dark" />
                  <p className="mb-3 mt-2 font-weight-bold fs-6 text-muted">
                    {item.title}
                  </p>
                </div>

                <div className="ms-auto">
                  <h2 className={`text-${item.color}`}>{item.earn}</h2>
                </div>
              </div>

              <Progress value={item.earn} color={item.color} />
            </CardBody>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default RevenueCards;
