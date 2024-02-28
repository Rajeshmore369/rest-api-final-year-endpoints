import React, { useEffect } from "react";
import {
  Card,
  Avatar,
  Typography,
  Divider,
  Row,
  Col,
  Badge,
  Modal,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlert } from "../context/actions/alert";
import {useParams} from 'react-router-dom'
const { Text, Title } = Typography;
const Alert = () => {
  const {id} = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlert((id)));
  }, [dispatch]);
  const userData = useSelector((state) => state.alert[0]);
  console.log(userData);
  const websiteStatus = "online";

  return (
    <Card
      style={{ margin: "1rem", width: "98%" }}
      className="custom-card" // Add a custom class for styling
      extra={
        <Badge 
          status={websiteStatus === "online" ? "success" : "error"}
          text={websiteStatus.toUpperCase()}
        />
      }
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Avatar size={128} src={profile} />
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Title level={3}>{userData?.fullName}</Title>
          <Text type="secondary">
            <EnvironmentOutlined /> {userData?.home}
          </Text>
          <br />
          <Text type="secondary">
            <PhoneOutlined /> {userData?.mobile}
          </Text>
          <br />
          <Text type="secondary">
            <MailOutlined /> {userData?.email}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

export default Alert;
