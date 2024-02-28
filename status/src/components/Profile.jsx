import React from "react";
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
import profile from "../assets/profile.png"

const { Text, Title } = Typography;

const Alert = () => {
  const userData = {
    _id: "65df4c4b9ba21de587b7f6d1",
    fullName: "test",
    home: "Pune",
    work: "Pune",
    mobile: "9890562214",
    email: "test@gmail.com",
    location: "City, Country",
    numberPlate:
      "https://res.cloudinary.com/diiljsias/image/upload/v1709138265/images/d6ydq2uwld0q0m4drkmf.jpg",
    surroundingImages: [
      "https://res.cloudinary.com/diiljsias/image/upload/v1709138265/images/d6ydq2uwld0q0m4drkmf.jpg",
      "https://res.cloudinary.com/diiljsias/image/upload/v1709138265/images/d6ydq2uwld0q0m4drkmf.jpg",
      "https://res.cloudinary.com/diiljsias/image/upload/v1709138265/images/d6ydq2uwld0q0m4drkmf.jpg",
      "https://res.cloudinary.com/diiljsias/image/upload/v1709138265/images/d6ydq2uwld0q0m4drkmf.jpg",
    ],
  };

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
          <Title level={3}>{userData.fullName}</Title>
          <Text type="secondary">
            <EnvironmentOutlined /> {userData.location}
          </Text>
          <br />
          <Text type="secondary">
            <PhoneOutlined /> {userData.mobile}
          </Text>
          <br />
          <Text type="secondary">
            <MailOutlined /> {userData.email}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

export default Alert;
