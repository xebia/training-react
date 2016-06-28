const initialState = {
  name: '',
  gender: '',
};
export default function simpleFormReducer(state = initialState, action) {
  const { type, fieldName, value } = action;
  switch (type) {
    case 'UPDATE_FIELD':
      return { ...state, [fieldName]: value };
    default:
      return state;
  }
}
