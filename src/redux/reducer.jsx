// Redux reducer for loading api data
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return action.payload;
    case 'DELETE_APARTMENT':
      return state.filter((i)=> i.id !== action.id)
    default:
      return state;
  }
};

let auth;
const signIn = async () => {
  const data = await fetch(
    'https://zuku-apartments-api.herokuapp.com/users/sign_in',
    {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: 'firdavs@gmail.com',
          password: '123456',
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  ).then((res) => {
    auth = res.headers.get('Authorization');
  });
  // console.log(auth);
};
// const token = 'eyJhbGciOiJIUzI1NiJ9..v79r--7ksRhInlyq3gqNBfe_C8mOHdvGBPRDrA5UBD8';
// Middleware function
const middleWareFunction = () => async (dispatch) => {
  await signIn();
  const data = await fetch('https://zuku-apartments-api.herokuapp.com/api/v1/apartments', {
    headers: { Authorization: auth },
  })
  const response = await data.json();
  dispatch({ type: 'LOAD_DATA', payload: response });
};

export default reducer;
export { middleWareFunction, auth };
