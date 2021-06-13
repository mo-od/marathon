import styled from "styled-components";
import React, {useState} from "react";
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

function SouvenirShirt({ dispatch, dataFromStore, setStepPer }) {
  console.log("counters ::", dataFromStore);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(4);
  const steps = getSteps();
  const [getShirtSize, setShirtSize] = useState("");


  const handleChangeShirtSize = (event) => {
    setShirtSize(event.target.value);
  };

  const submitButton = () => {
    alert("คุณได้ทำการลงทะเบียนเรียบร้อย");
    const dataSet = {
      ShirtSize:getShirtSize,
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
            <Title>เสื้อที่ระลึก</Title>
            <Query>ไซส์เสื้อ</Query>
            <input type="radio"  id="size" name="size" value="XS" onChange={handleChangeShirtSize} defaultValue={getShirtSize}/><label>XS</label>
            <input type="radio" id="size" name="size" value="S" onChange={handleChangeShirtSize} defaultValue={getShirtSize} /><label>S</label>
            <input type="radio" id="size" name="size" value="M" onChange={handleChangeShirtSize} defaultValue={getShirtSize} /><label>M</label>
            <input type="radio"  id="size" name="size" value="L" onChange={handleChangeShirtSize} defaultValue={getShirtSize}/><label>L</label>
            <input type="radio" id="size" name="size" value="XL" onChange={handleChangeShirtSize} defaultValue={getShirtSize} /><label>XL</label>
            <input type="radio" id="size" name="size" value="XXL" onChange={handleChangeShirtSize} defaultValue={getShirtSize} /><label>XXL</label>
            <input type="radio" id="size" name="size" value="XXXL" onChange={handleChangeShirtSize} defaultValue={getShirtSize} /><label>XXXL</label>
            <NextButton onClick={() => submitButton()}><Span>Submit</Span></NextButton>
            </Box>
        </Container>
    )
}
const mapStateToProps = function (state) {
  return {
    dataFromStore: state,
  };
};
export default connect(mapStateToProps)(SouvenirShirt);

const NextButton = styled.button`
            border-radius: 4px;
            margin-top: 50px;
            justify-content: center;
            font-size: 15px;
            padding: 0px 24px;
            width: 100%;
            height: 45px;
            background: #4CAF50;
            border: none;
            font-size: 18px;
            cursor: pointer;

            &:hover {
                background: #45a049;

            }
`
const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
box-sizing: content-box;
margin: 30px 0px;

    
    
`
const Title = styled.div`
            display: flex;
            margin-top: 0px;
            justify-content: center;
            font-size: 25px;
    
    
`
const Box = styled.div`
border-solid: 1px;
border-radius: 10px;
padding: 20px;
background-color: #ffffff;
`

const Query = styled.div`
  font-size: 22px;
  margin-top: 27px;
  padding: 20px 24px;
  span {
    display: flex;
    flex: 1;
    margin-top: 10px;
  }
`;

const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`
