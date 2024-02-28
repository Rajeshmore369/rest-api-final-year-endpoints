import React,{useEffect} from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchAlert } from "../context/actions/alert";
const { Text, Title } = Typography;

const Alert = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlert("65df4c4b9ba21de587b7f6d1"));
  }, [dispatch]);
  const userData = useSelector((state) => state.alert[0]);
  console.log(userData);


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
            {userData.images.map((image, index) => (
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
