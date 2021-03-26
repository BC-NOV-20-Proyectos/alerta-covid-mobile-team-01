const filterSymptoms = (symptoms, id, newValue, title) => {
  let filteredSymptoms = symptoms.filter((symptom) => symptom.id !== id);
  return [...filteredSymptoms, {id, has: newValue, title}];
};

export {filterSymptoms};
