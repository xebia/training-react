const updateField = fieldName => value => ({
  type: 'UPDATE_FIELD',
  fieldName,
  value,
});


export const changeName = updateField('name');
export const changeGender = updateField('gender');
