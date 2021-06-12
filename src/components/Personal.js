import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "ข้อมูลส่วนตัว",
    "ข้อมูลเกี่ยวกับการวิ่ง",
    "ผู้ติดต่อฉุกเฉิน",
    "ข้อมูลทางการแพทย์",
    "เสื้อของที่ระลึก",
    
  ];
}

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown stepIndex';
//   }
// }

function Personal({ dispatch, dataFromStore }) {
  console.log("counters ::", dataFromStore);
  const [getFirstNameTH, setFirstNameTH] = useState("")
  const [getLastNameTH, setLastNameTH] = useState("")
  const [getFirstNameENG, setFirstNameENG] = useState("")
  const [getLastNameENG, setLastNameENG] = useState("")
  const [getDate, setDate] = useState("")
  const [getEmail, setEmail] = useState("")
  const [getId, setId] = useState("")
  const [getAddress, setAddress] = useState("")
  const [getPhoneNumber, setPhoneNumber] = useState("")
  const [getImageUrl, setImageUrl] = useState("")
  



  const [getPrefixTh, setPrefixTh] = useState("");
  const [getPrefixEng, setPrefixEng] = useState("");
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [name, setName] = useState("");
  
  const handleChangeFirstNameTH = (event) => {
    setFirstNameTH(event.target.value);
  };
  const handleChangeLastNameTH = (event) => {
    setLastNameTH(event.target.value);
  };
  const handleChangeFirstNameENG = (event) => {
    setFirstNameENG(event.target.value);
  };
  const handleChangeLastNameENG = (event) => {
    setLastNameENG(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeId = (event) => {
    setId(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };
  const handleChangeTh = (event) => {
    setPrefixTh(event.target.value);
  };
  const handleChangeEng = (event) => {
    setPrefixEng(event.target.value);
  };
  
    
  const submitButton = () => {
    console.log("hello",getFirstNameTH)
    const dataSet ={
      prefixTH: getPrefixTh,
      firstNameTH: getFirstNameTH,
      lastNameTH: getLastNameTH,
      prefixENG: getPrefixEng,
      firstNameENG: getFirstNameENG,
      lastNameENG: getLastNameENG,
      birthDay:getDate ,
      email:getEmail ,
      idCard:getId ,
      address:getAddress ,
      phoneNumber:getPhoneNumber ,
      imageUrl:getImageUrl,
      nameBIB:name ,
      
    }; 
    dispatch({
      type: "Add",
      dataSet,
    });

  };
  
  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {
steps.map
((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Title>ข้อมูลส่วนตัว</Title>

        <Label style={{marginTop :26}} for="DateBirth"> ชื่อไทย </Label>
        <span style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          <FormControl
            style={{ width: 150, height: "100%" }}
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              คำนำหน้า
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={getPrefixTh}
              onChange={handleChangeTh}
              label="คำนำหน้า"
            >
              <MenuItem value={1}>นาย</MenuItem>
              <MenuItem value={2}>นางสาว</MenuItem>
              <MenuItem value={3}>นาง</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{ marginLeft: 16 ,width: '50%' }}
            id="outlined-basic"
            placeholder="FirstName TH"
            onChange={handleChangeFirstNameTH}
            variant="outlined"
            defaultValue={getFirstNameTH}
          />
          {/* <Input style={{width: 100}} name="firstNameT" placeholder="กรุณากรอกชื่อ" /> */}
          <TextField
            style={{ marginLeft: 16,width: '50%' }}
            id="outlined-basic"
            label="LastName TH"
            onChange={handleChangeLastNameTH}
            variant="outlined"
          />
        </span>
        <Label style={{marginTop :26}} for="DateBirth"> ชื่ออังกฤษ </Label>
        <span style={{ display: "flex", flexDirection: "row", marginTop: 24 }}>
          <FormControl
            style={{ width: 150, height: "100%" }}
            variant="outlined"
            className={classes.formControl}
            
          >
            <InputLabel id="demo-simple-select-outlined-label">
              คำนำหน้า
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={getPrefixEng}
              onChange={handleChangeEng}
              label="คำนำหน้า"
            >
              <MenuItem value={1}>Mr</MenuItem>
              <MenuItem value={2}>Miss</MenuItem>
              <MenuItem value={3}>Mrs</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{ marginLeft: 16 ,width: '50%' }}
            id="outlined-basic"
            label="FirstName ENG"
            variant="outlined"
            onChange={handleChangeFirstNameENG}
          />
          {/* <Input style={{width: 100}} name="firstNameT" placeholder="กรุณากรอกชื่อ" /> */}
          <TextField
            style={{ marginLeft: 16,width: '50%' }}
            id="outlined-basic"
            label="LastName ENG"
            variant="outlined"
            onChange={handleChangeLastNameENG}
          />
        </span>
        <Label style={{marginTop :26}} for="DateBirth"> วันเดือนปีเกิด </Label>
        <TextField
            style={{width: '50%',marginTop:16}}
            id="outlined-basic"
            label="วันเดือนปีเกิด"
            variant="outlined"
            onChange={handleChangeDate}
          />
            <Label style={{marginTop :26}} for="Email"> Email </Label>
        <TextField
            style={{width: '50%',marginTop:16}}
            id="outlined-basic"
            label="e.g.........@......."
            variant="outlined"
            onChange={handleChangeEmail}
          />
            <Label style={{marginTop :26}} for="DateBirth"> เลขบัตรประจำตัวประชาชน </Label>
        <TextField
            style={{width: '50%',marginTop:16}}
            id="outlined-basic"
            label="X-XXXX-XXXX-XXXX"
            variant="outlined"
            onChange={handleChangeId}
          />
            <Label style={{marginTop :26}} for="DateBirth"> ที่อยู่ </Label>
            <TextField  style={{width: '50%',marginTop:16}}
          id="outlined-multiline-static"
          label="กรุณากรอกที่อยู่"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          onChange={handleChangeAddress}
        />

            <Label style={{marginTop :26}} for="DateBirth"> เบอร์โทรศัพท์ </Label>
        <TextField
            style={{width: '50%',marginTop:16}}
            id="outlined-basic"
            label="+66-XXXX-XXXX"
            variant="outlined"
            onChange={handleChangePhoneNumber}
          />
           <Label style={{marginTop :26}} for="DateBirth"> รูปถ่ายหน้าตรง </Label>
        <input
          type="file"
          name="picField"
          id="picField"
          size="24"
          onChange="preview_2(this);"
          alt=""
          onChange={handleChangeImageUrl}
        />

        <NextButton onClick={()=> submitButton()}>
          <Span>Submit</Span>
        </NextButton>
      </Box>
    </Container>
  );
}
const mapStateToProps = function (state) {
  return {
    dataFromStore: state,
  };
};

export default connect(mapStateToProps)(Personal);

const Box = styled.div`
  border-solid: 1px;
  padding: 20px;
  background-color: #ffffff;
`;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  box-sizing: content-box;
  margin: 30px 0px;
`;

const NextButton = styled.button`
  border-radius: 4px;
  justify-content: center;
  font-size: 15px;
  padding: 0px 24px;
  width: 100%;
  height: 45px;
  background: #4caf50;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    background: #45a049;
  }
`;
const Title = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: flex-start;
  font-size: 25px;
`;

const Input = styled.input`
  appearance: none;
  width: 100%;
  margin: 5px 0px;
  padding: 9px 16px;
  background-color: rgb(246, 246, 250);
  border: 1px solid rgb(209, 209, 213);
  border-radius: 4px;
  box-sizing: border-box;
  caret-color: rgb(0, 106, 255);
  cursor: text;
  outline: none;
  box-shadow: none;
  color: rgb(42, 42, 51);
  -webkit-font-smoothing: antialiased;
  text-transform: none;
`;

const Label = styled.div``;

const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`;