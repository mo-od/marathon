// const data = [{
//   bloodType:"",
//   allergy: false,
//   congenitalDisease: false,
//   surgicalHistory: false,
//   planToHaveChildren: false,
//   drugEatRegularly: false,
//   beenInjured: false,
//   regularExercise: false,
//   everHadChestPain: false,
  

// }]



export default (state = [], action) => {
    switch (action.type) {
      case "Add":
        return state.concat([action.dataSet]);
      case "Delete":
        return state.filter((data) => data.id !== action.id);
      default:
        return state;
    }
  };
  