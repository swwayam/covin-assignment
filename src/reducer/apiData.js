const api = (state = {}, action) => {
    switch(action.type){
      case "setData":
        state = action.payload;
        return state;
     default:
        return state;
    }
  };

export default api;