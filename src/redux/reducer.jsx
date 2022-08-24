// Redux reducer for loading api data
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return action.payload;
    case 'DELETE_APARTMENT':
      return state.filter((i) => i.id !== action.id);
    default:
      return state;
  }
};

const authorize = (state = false, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return true;
    case 'SIGNOUT':
      return false;
    default:
      return false;
  }
};

// Middleware function
const middleWareFunction = () => async (dispatch) => {
  const data = await fetch('https://zuku-apartments-api.herokuapp.com/api/v1/apartments', {
    headers: { Authorization: JSON.parse(localStorage.getItem('token'))},
  });
  const response = await data.json();
  dispatch({ type: 'LOAD_DATA', payload: response });
};

export default reducer;
export { middleWareFunction, authorize };
