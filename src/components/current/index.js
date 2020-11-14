import React, { useContext } from "react";
import { Row, Col } from "antd";
import { GlobalContext } from "../../contexts/GlobalState";
import ReactAnimatedWeather from "react-animated-weather";
import { weatherMap, isEmpty } from "../../utilities/common";

export const Current = () => {
  const { weather } = useContext(GlobalContext);
  let temperature = 0;
  let description = "";
  let time = "";
  let wData = [];
  if (!isEmpty(weather)) {
    temperature = weather.current.temp - 273.15;
    description = weather.current.weather[0].description;

    time =
      weather.current.weather[0].icon[
        weather.current.weather[0].icon.length - 1
      ];

    wData = weatherMap.filter(
      (item) =>
        item.key === weather.current.weather[0].main && item.time === time
    );
  }
  return (
    <>
      {!isEmpty(weather) && (
        <Row>
          <Col
            span={24}
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              minHeight: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <ReactAnimatedWeather
              icon={wData[0].value}
              color="#000"
              size={128}
              animate={true}
            />
            <div style={{ marginLeft: 20 }}>
              <div style={{ float: "left", height: 100 }}>
                <span
                  style={{
                    fontSize: 70,
                    color: "#000000",
                  }}
                >
                  {Math.round(temperature)}
                  <span
                    style={{
                      position: "absolute",
                      marginTop: 15,
                      fontSize: 30,
                      color: "#000000",
                    }}
                  >
                    &#8451;
                  </span>
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  clear: "left",
                  fontSize: 30,
                  color: "#000000",
                  opacity: 1,
                  textTransform: "capitalize",
                }}
              >
                {description}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
