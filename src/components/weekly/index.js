import React, { useContext } from "react";
import { Row, Col } from "antd";
import { GlobalContext } from "../../contexts/GlobalState";
import ReactAnimatedWeather from "react-animated-weather";
import { isEmpty, weatherMap } from "../../utilities/common";

export const Weekly = () => {
  const { weather } = useContext(GlobalContext);
  let dailyData = [];
  let finalData = [];

  if (!isEmpty(weather)) {
    dailyData = weather.daily;
    dailyData = dailyData.slice(1, 6);
    // eslint-disable-next-line array-callback-return
    dailyData.map((data) => {
      const temperature = data.temp.day - 273.15;
      const obj = {};
      obj.dt = data.dt;
      obj.temperature = temperature;
      const time = data.weather[0].icon[data.weather[0].icon.length - 1];
      const wData = weatherMap.filter(
        (item) =>
          item.key === weather.current.weather[0].main && item.time === time
      );
      obj.icon = wData[0].value;
      finalData.push(obj);
    });
  }
  return (
    <>
      {!isEmpty(weather) && (
        <Row
          style={{
            pading: 2,
          }}
        >
          <Col span="24">
            <table
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                height: 350,
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #000" }}>
                  <td
                    colSpan={3}
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "bold",
                      height: 40,
                      color: "#000000",
                    }}
                  >
                    Previão da semana
                  </td>
                </tr>
              </thead>
              <tbody>
                {finalData &&
                  finalData.map((daily) => (
                    <tr
                      style={{
                        borderBottom: "1px solid #000",
                        borderSpacing: 10,
                      }}
                      key={daily.dt}
                    >
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        {
                          new Date(
                            (daily.dt - weather.timezone_offset) * 1000
                          ).getDate()
                        }
                        /
                        {
                          new Date(
                            (daily.dt - weather.timezone_offset) * 1000
                          ).getMonth() + 1
                        }
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        {Math.round(daily.temperature)}
                        <span
                          style={{
                            position: "absolute",
                            marginTop: 0,
                            fontSize: 10,
                            color: "#000000",
                          }}
                        >
                          &#8451;
                        </span>
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <ReactAnimatedWeather
                          icon={daily.icon}
                          color="#000000"
                          size={32}
                          animate={true}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr style={{ height: 40 }}>
                  <td colSpan={3}></td>
                </tr>
              </tfoot>
            </table>
          </Col>
        </Row>
      )}
    </>
  );
};
