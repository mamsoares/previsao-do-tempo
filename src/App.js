import React, { useContext } from "react";
import "./App.css";
import { Row, Col } from "antd";
import { SearchBox } from "../src/components/searchbox";
import { Current } from "../src/components/current";
import { Weekly } from "../src/components/weekly";
import { Hourly } from "../src/components/hourly";
import { Location } from "../src/components/location";
import { GlobalContext } from "../src/contexts/GlobalState";

const App = () => {
  const { backgroundImage } = useContext(GlobalContext);
  if (backgroundImage) {
    document.body.style.backgroundImage = `url("${backgroundImage}")`;
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
  return (
    <Row justify="space-around" align="middle">
      <Col span={20} style={{ marginTop: 20 }}>
        <SearchBox />
      </Col>
      <Col span={20} style={{ marginTop: 10 }}>
        <Location />
      </Col>
      <Col
        span={20}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Current />
      </Col>
      <Col span={20} style={{ marginTop: 10 }}>
        <Row>
          <Col span={16} style={{ padding: 2 }}>
            <Hourly />
          </Col>
          <Col span={8} style={{ padding: 2 }}>
            <Weekly />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default App;
