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
  EyeOutlined,
} from "@ant-design/icons";

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

  const handleImagePreview = (imageSrc) => {
    Modal.info({
      content: <img alt="preview" style={{ width: "100%" }} src={imageSrc} />,
      maskClosable: true,
      className: "custom-modal", // Add a custom class for styling
    });
  };

  return (
    <Card
      style={{ margin: "1rem", width: "98%" }}
      className="custom-card" // Add a custom class for styling
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4}>Addresses</Title>
          <Text>
            <strong>Work:</strong> {userData.work}
          </Text>
          <br />
          <Text>
            <strong>Home:</strong> {userData.home}
          </Text>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4}>Last Location:</Title>
          <a href="#">Jump to the Location</a>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4}>Vehicle Number:</Title>
          <div className="image">
            <img
              src={userData.numberPlate}
              alt="vehicle-number"
              className="responsive-image"
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4}>Surrounding Images:</Title>
          <div className="gallery">
            {userData.surroundingImages.map((image, index) => (
              <div
                key={index}
                className="image"
                onClick={() => handleImagePreview(image)}
              >
                <img
                  src={image}
                  alt={`surrounding-image-${index}`}
                  className="responsive-image"
                />
                <div className="image-overlay">
                  <EyeOutlined style={{ fontSize: 24, color: "#fff" }} />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Divider />
    </Card>
  );
};

export default Alert;
