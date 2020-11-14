import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import Geocode from "react-geocode";
import axios from "axios";
import { GlobalContext } from "../../contexts/GlobalState";

export const SearchBox = () => {
  const [location, updateLocation] = useState("");
  const { updateBackground, updateWeather, updateAddress } = useContext(
    GlobalContext
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      Geocode.setLanguage("pt-BR");

      // Get address from latidude & longitude.
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          if (response.results.length > 3) {
            updateAddress(response.results[3].formatted_address);
            updateLocation(response.results[3].formatted_address);
          } else {
            updateAddress(response.results[0].formatted_address);
            updateLocation(response.results[0].formatted_address);
          }
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&lang=pt_br`
            )
            .then((response) => {
              updateWeather(response.data);

              axios
                .get(
                  // `https://api.unsplash.com/photos/random?query=${location},clear&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
                  `https://api.unsplash.com/search/photos?query=${location},clear&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
                )
                .then((response) => {
                  if (typeof response.data !== "undefined") {
                    const url = response.data.urls.regular;
                    updateBackground(url);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.error(error);
        }
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCityChange = (e) => {
    updateLocation(e.target.value);
  };

  const onSearch = () => {
    Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
    Geocode.setLanguage("pt-BR");

    Geocode.fromAddress(location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        updateAddress(response.results[0].formatted_address);

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&lang=pt_br`
          )
          .then((response) => {
            updateWeather(response.data);

            axios
              .get(
                `https://api.unsplash.com/photos/random?query=${location},clear&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
              )
              .then((response) => {
                if (typeof response.data !== "undefined") {
                  const url = response.data.urls.regular;
                  updateBackground(url);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <>
      <Row>
        <Col span={24}></Col>
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            size="large"
            placeholder="Informe sua localização"
            onChange={(e) => onCityChange(e)}
            style={{ borderRadius: "10px" }}
          />
          <Button
            size="large"
            type="default"
            onClick={onSearch}
            style={{ marginLeft: "5px", borderRadius: "10px", background:"#46ba0d", color: "#FFF"}}
          >
            Pesquisar
          </Button>
        </Col>
      </Row>
    </>
  );
};
