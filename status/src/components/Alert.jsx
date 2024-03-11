import React, { useEffect } from "react";
import {
  Card,
  Typography,
  Divider,
  Row,
  Col,
  Modal,
} from "antd";
import {
  EnvironmentOutlined,
  EyeOutlined,
  HomeOutlined,
  WorkOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlert } from "../context/actions/alert";
import LocationScreen from "./LocationScreen";
import { useParams } from 'react-router-dom'
const { Text, Title } = Typography;

const Alert = ({ userData, index }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchAlert(id));
  }, [dispatch]);

  const websiteStatus = "online";

  const handleImagePreview = (imageSrc) => {
    const simg = imageSrc.imageUrl;
    console.log(simg)
    Modal.info({
      content: <img alt="preview" style={{ width: "100%" }} src={simg} />,
      maskClosable: true,
      className: "custom-modal", // Add a custom class for styling
    });
  };

  return (
    <Card
      style={{ margin: "1rem", width: "98%" }}
      className="custom-card about__box"
      id="alerts"// Add a custom class for styling
    >
      <h1 >Alert : {index}</h1>
      <Row gutter={[16, 16]}>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card style={{ margin: "10px" }} >
            <EnvironmentOutlined style={{ fontSize: 24 }} />
            <Title style={{ color: "#eee" }} level={4}>Work Address</Title>
            <Text style={{ color: "#eee" }} >{userData?.work}</Text>
          </Card>
          <Card style={{ margin: "10px" }} >
            <HomeOutlined style={{ fontSize: 24 }} />
            <Title level={4} style={{ color: "#eee" }} >Home Address</Title>
            <Text>{userData?.home}</Text>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4} style={{ color: "#eee" }} >Last Location:</Title>
          <LocationScreen
            latitude={userData?.latitude}
            longitude={userData?.longitude}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4} style={{ color: "#eee" }} >Vehicle Number:</Title>
          <div className="image">
            <img
              src={userData?.numberPlate}
              alt="vehicle-number"
              className="responsive-image"
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={4} style={{ color: "#eee" }} >Surrounding Images:</Title>
          <div className="gallery">
            {userData?.images.map((image, index) => (
              <div
                key={index}
                className="image"
                onClick={() => handleImagePreview(image)}
              >
                <img
                  src={image.imageUrl}
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
