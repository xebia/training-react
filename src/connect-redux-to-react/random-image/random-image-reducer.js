const initialState = {};
export default function randomImageReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case 'IMAGE_RESPONSE':
      return data;
    default:
      return state;
  }
}
