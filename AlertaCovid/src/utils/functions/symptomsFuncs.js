const filterSymptoms = (symptoms, id, newValue, title) => {
  let filteredSymptoms = symptoms.filter((symptom) => symptom.id !== id);
  return [...filteredSymptoms, {id, has: newValue, title}];
};
const findTrue = (symptoms, dispatch, info, post, token) => {
  const positiveSymptoms = symptoms.filter((e) => e.has === true);
  if (positiveSymptoms.length > 0) {
    dispatch();
    setTimeout(() => {
      post(token, info);
    }, 1500);
  }
};
const checkTest = (testResult, dispatch, token, health, post) => {
  if (testResult === 'Positive') {
    dispatch();
    setTimeout(() => {
      post(token, health);
    }, 1500);
  }
};
export {filterSymptoms, findTrue, checkTest};
