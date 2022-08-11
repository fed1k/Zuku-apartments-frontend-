// Redux reducer for loading api data
const reducer = (state = [], action) => {
  switch(action.type){
    case 'LOAD_DATA':
      return action.payload
    default:
      return state
  }
}

// Middleware function
const middleWareFunction = () => async(dispatch) => {
  const data = await fetch('https://my-old-books-api.herokuapp.com/api/v1/books')
  const response = await data.json()
  dispatch({type:'LOAD_DATA', payload: response})
}

export default reducer;
export { middleWareFunction }