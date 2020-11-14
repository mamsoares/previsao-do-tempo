export default (state, action) => {
  switch (action.type) {
    case "UPDATE_BACKGROUND":
      return {
        ...state,
        backgroundImage: action.payload,
      };

    case "UPDATE_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };

    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};
