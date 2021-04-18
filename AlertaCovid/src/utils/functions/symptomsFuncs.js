const filterSymptoms = (symptoms, id, newValue, title) => {
  let filteredSymptoms = symptoms.filter((symptom) => symptom.id !== id);
  return [...filteredSymptoms, {id, has: newValue, title}];
};
const findTrue = (symptoms, dispatch) => {
  const positiveSymptoms = symptoms.filter((e) => e.has === true);
  if (positiveSymptoms.length > 0) {
    dispatch();
  }
};
const checkTest = (testResult, dispatch) => {
  if (testResult === 'Positive') {
    dispatch();
  }
};
export {filterSymptoms, findTrue, checkTest};
