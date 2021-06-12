// const data = [{
//   emergencyContact: [{fullName: "",relative:"",phoneNo:""},{fullName: "",relative:"",phoneNo:""}],
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
  