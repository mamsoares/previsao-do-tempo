import React, { useContext } from "react";
import { Row, Col } from "antd";
import { GlobalContext } from "../../contexts/GlobalState";
import { isEmpty } from "../../utilities/common";

export const Location = () => {
  const { weather, address } = useContext(GlobalContext);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  let currentDateTime = "";
  let formattedAddress = "";

  if (!isEmpty(weather)) {
    const d = new Date(
      (weather.current.dt - Math.abs(weather.timezone_offset)) * 1000
    );
    
    currentDateTime = d.toLocaleString("pt-BR", options).replaceAll(".", "");
    
    if (address) {
      formattedAddress = address;
    }
  }
  return (
    <>
      {!isEmpty(weather) && (
        <Row>
          <Col
            span="24"
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              minHeight: "50px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.5)",
              display: "flex",
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {formattedAddress}
            <br></br>
            {currentDateTime}
          </Col>
        </Row>
      )}
    </>
  );
};
