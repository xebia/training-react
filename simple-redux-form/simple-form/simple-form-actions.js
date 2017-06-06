<<<<<<< HEAD
export const changeName = () => {
||||||| merged common ancestors
export const changeName = function () {
=======
const updateField = fieldName => value => ({
  type: 'UPDATE_FIELD',
  fieldName,
  value,
});
>>>>>>> origin/redux-form2

<<<<<<< HEAD
};
export const changeGender = () => {
||||||| merged common ancestors
};
export const changeGender = funtion () {
=======
>>>>>>> origin/redux-form2

export const changeName = updateField('name');
export const changeGender = updateField('gender');
