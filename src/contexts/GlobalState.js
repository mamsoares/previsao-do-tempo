import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  backgroundImage:
    "https://images.unsplash.com/photo-1557305592-3664badb1e56?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNjgxNH0",
  weather: {},
  address: "",
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   Actions;
  const updateBackground = (url) => {
    dispatch({
      type: "UPDATE_BACKGROUND",
      payload: url,
    });
  };

  const updateWeather = (weatherData) => {
    dispatch({
      type: "UPDATE_WEATHER",
      payload: weatherData,
    });
  };

  const updateAddress = (address) => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: address,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        backgroundImage: state.backgroundImage,
        weather: state.weather,
        updateBackground,
        updateWeather,
        address: state.address,
        updateAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
