import React, { useEffect, useState } from "react";
import { Card, Typography, Divider, Row, Col, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const LocationScreen = ({latitude,longitude}) => {

  const getCurrentLocation = async () => {
    // Your existing code for getting location
  };

  useEffect(() => {
    getCurrentLocation();
    const intervalId = setInterval(getCurrentLocation, 5000);
    return () => {
      clearInterval(intervalId);
      console.log("Component unmounted");
    };
  }, []);

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div style={{ height: "300px", width: "100%" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`}
              allowFullScreen
            />
          </div>
          <br />
          <a href="#" onClick={openGoogleMaps}>
            Open in Google Maps
          </a>
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default LocationScreen;
