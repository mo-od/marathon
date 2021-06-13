import styled from "styled-components";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

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

function Emergency({ dispatch, dataFromStore,setStepPer }) {
  console.log("counters ::", dataFromStore);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const steps = getSteps();
  const [getName, setName] = useState("");
  const [getRelation, setRelation] = useState("");
  const [getNumberPhone, setNumberPhone] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeRelation = (event) => {
    setRelation(event.target.value);
  };
  const handleChangeNumberPhone = (event) => {
    setNumberPhone(event.target.value);
  };

  const submitButton = () => {
    setStepPer(3);
    const dataSet = {
      Name: getName,
      Relation: getRelation,
      NumberPhone: getNumberPhone,
    };
    dispatch({
      type: "Add",
      dataSet,
    });
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Title>ผู้ติดต่อฉุกเฉิน</Title>
        <Query> ผู้ติดต่อฉุกเฉินคนที่ 1 </Query>

        <label style={{ marginTop: 30 }}> ชื่อ-นามสกุล </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeName}
            variant="outlined"
            defaultValue={getName}
          />
        </span>
        <label style={{ marginTop: 30 }}> ความสัมพันธ์ </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeRelation}
            variant="outlined"
            defaultValue={getRelation}
          />
        </span>

        <label style={{ marginTop: 30 }}> เบอร์โทรศัพท์ </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeNumberPhone}
            variant="outlined"
            defaultValue={getNumberPhone}
          />
        </span>

        <hr />
        <Query> ผู้ติดต่อฉุกเฉินคนที่ 2 </Query>

        <label style={{ marginTop: 30 }}> ชื่อ-นามสกุล </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeName}
            variant="outlined"
            defaultValue={getName}
          />
        </span>

        <label style={{ marginTop: 30 }}> ความสัมพันธ์ </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeRelation}
            variant="outlined"
            defaultValue={getRelation}
          />
        </span>

        <label style={{ marginTop: 30 }}> เบอร์โทรศัพท์ </label>
        <span style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder=""
            onChange={handleChangeNumberPhone}
            variant="outlined"
            defaultValue={getNumberPhone}
          />
        </span>

        <NextButton onClick={() => submitButton()}>
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
export default connect(mapStateToProps)(Emergency);

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  box-sizing: content-box;
  margin: 30px 0px;
`;

const Title = styled.div`
  display: flex;
  margin: 0px 0px 50px 0px;
  justify-content: center;
  font-size: 25px;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  border-solid: 1px;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
`;

const Query = styled.div`
  font-size: 22px;
  margin: 20px;
    
  }
`;

const NextButton = styled.button`
  border-radius: 4px;
  margin-top: 50px;
  justify-content: center;
  font-size: 15px;
  padding: 0px 24px;
  width: 100%;
  height: 45px;
  background: #4caf50;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
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
const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`;
