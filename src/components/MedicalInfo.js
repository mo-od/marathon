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

function MedicalInfo({ dispatch, dataFromStore, setStepPer }) {
  console.log("counters ::", dataFromStore);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(3);
  const steps = getSteps();
  const [getBloodType, setBloodType] = useState("");
  const [getAllergy, setAllergy] = useState("");
  const [getAboutAllergy, setAboutAllergy] = useState("");
  const [getCongenitalDisease, setCongenitalDisease] = useState("");
  const [getAboutCongenitalDisease, setAboutCongenitalDisease] = useState("");
  const [getSurgicalHistory, setSurgicalHistory] = useState("");
  const [getAboutSurgicalHistory, setAboutSurgicalHistory] = useState("");
  const [getDateAboutSurgicalHistory, setDateAboutSurgicalHistory] = useState("");
  const [getPlanToHaveChildren, setPlanToHaveChildren] = useState("");
  const [getDrugEatRegularly, setDrugEatRegularly] = useState("");
  const [getBeenInjured, setBeenInjured] = useState("");
  const [getRegularExercise, setRegularExercise] = useState("");
  const [getEverHadChestPain, setEverHadChestPain] = useState("");

  const handleChangeBloodType = (event) => {
    setBloodType(event.target.value);
  };
  const handleChangeAllergy = (event) => {
    setAllergy(event.target.value);
  };
  const handleChangeAboutAllergy = (event) => {
    setAboutAllergy(event.target.value);
  };
  const handleChangeCongenitalDisease = (event) => {
    setCongenitalDisease(event.target.value);
  };
  const handleChangeAboutCongenitalDisease = (event) => {
    setAboutCongenitalDisease(event.target.value);
  };
  const handleChangeSurgicalHistory = (event) => {
    setSurgicalHistory(event.target.value);
  };
  const handleChangeAboutSurgicalHistory = (event) => {
    setAboutSurgicalHistory(event.target.value);
  };
  const handleChangeDateAboutSurgicalHistory = (event) => {
    setDateAboutSurgicalHistory(event.target.value);
  };
  const handleChangePlanToHaveChildren = (event) => {
    setPlanToHaveChildren(event.target.value);
  };
  const handleChangeDrugEatRegularly = (event) => {
    setDrugEatRegularly(event.target.value);
  };
  const handleChangeBeenInjured = (event) => {
    setBeenInjured(event.target.value);
  };
  const handleChangeRegularExercise = (event) => {
    setRegularExercise(event.target.value);
  };
  const handleChangeEverHadChestPain = (event) => {
    setEverHadChestPain(event.target.value);
  };

  const submitButton = () => {
      setStepPer(4);    
      const dataSet = {
      BloodType: getBloodType,
      allergy: getAllergy,
      aboutAllergy: getAboutAllergy,
      congenitalDisease: getCongenitalDisease,
      aboutCongenitalDisease: getAboutCongenitalDisease,
      surgicalHistory: getSurgicalHistory,
      aboutSurgicalHistory: getAboutSurgicalHistory,
      dateAboutSurgicalHistory: getDateAboutSurgicalHistory,
      planToHaveChildren: getPlanToHaveChildren,
      drugEatRegularly: getDrugEatRegularly,
      beenInjured: getBeenInjured,
      regularExercise: getRegularExercise,
      everHadChestPain: getEverHadChestPain,
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
        <Title>ข้อมูลทางการแพทย์</Title>
        <Query>หมู่เลือด</Query>
        <input type="radio" id="groupA" name="group" value="A" onChange={handleChangeBloodType} defaultValue={getBloodType}/>
        <label for="groupA">A</label>
        <input type="radio" id="groupB" name="group" value="B" onChange={handleChangeBloodType} defaultValue={getBloodType} />
        <label for="groupB">B</label>
        <input type="radio" id="groupO" name="group" value="O" onChange={handleChangeBloodType} defaultValue={getBloodType} />
        <label for="groupO">O</label>
        <input type="radio" id="groupAB" name="group" value="AB" onChange={handleChangeBloodType} defaultValue={getBloodType} />
        <label for="groupAB">AB</label>
        <br />
        <Query>ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่</Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่มี" onChange={handleChangeAllergy} defaultValue={getAllergy} />
        <label>ไม่มี</label>
        <input type="radio" name="NeverEver" value="มี" onChange={handleChangeAllergy} defaultValue={getAllergy}/>
        <label>มี</label>
        <span style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder="หากมีโปรดระบุ"
            onChange={handleChangeAboutAllergy}
            variant="outlined"
            defaultValue={getAboutAllergy}
          />
        </span>

        <Query>ท่านมีประวัติการผ่าตัดมาก่อน หรือไม่ </Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่มี" onChange={handleChangeSurgicalHistory} defaultValue={getSurgicalHistory} />
        <label>ไม่มี</label>
        <input type="radio" name="NeverEver" value="มี" onChange={handleChangeSurgicalHistory} defaultValue={getSurgicalHistory}/>
        <label>มี</label>
        <span style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <TextField
            style={{ width: "40%", marginRight: 30 }}
            id="outlined-basic"
            placeholder="หากมีโปรดระบุตำแหน่ง"
            onChange={handleChangeAboutSurgicalHistory}
            variant="outlined"
            defaultValue={getAboutSurgicalHistory}
          />

          <TextField
            style={{ width: "40%" }}
            id="outlined-basic"
            placeholder="ระบุวันที่ได้รับการผ่าตัด"
            onChange={handleChangeDateAboutSurgicalHistory}
            variant="outlined"
            defaultValue={getDateAboutSurgicalHistory}
          />
        </span>
        <br />
        <Query>ท่านมีโรคประจำตัว หรือไม่</Query>
        <br />
        <input type="radio"  name="NeverEver" value="ไม่มี" onChange={handleChangeCongenitalDisease} defaultValue={getCongenitalDisease}/>
        <label>ไม่มี</label>
        <input type="radio" name="NeverEver" value="มี" onChange={handleChangeCongenitalDisease} defaultValue={getCongenitalDisease} />
        <label>มี</label>
        <span style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            placeholder="หากมีโปรดระบุ"
            onChange={handleChangeAboutCongenitalDisease}
            variant="outlined"
            defaultValue={getAboutCongenitalDisease}
          />
        </span>
        <Query>
          ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่ง หรือไม่
        </Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่มี" onChange={handleChangePlanToHaveChildren} defaultValue={getPlanToHaveChildren}/>
        <label>ไม่มี</label>
        <input type="radio" name="NeverEver" value="มี" onChange={handleChangePlanToHaveChildren} defaultValue={getPlanToHaveChildren} />
        <label>มี</label>
        <br />
        <Query>
          ท่านมียาที่ต้องทานเป็นประจำหรือไม่
        </Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่มี" onChange={handleChangeDrugEatRegularly} defaultValue={getDrugEatRegularly} />
        <label>ไม่มี</label>
        <input type="radio"  name="NeverEver" value="ไม่มี" onChange={handleChangeDrugEatRegularly} defaultValue={getDrugEatRegularly}/>
        <label>มี</label>
        <br />
        <Query>
          ท่านเคยบาดเจ็บ หรือ เจ็บป่วย จากการเข้าร่วมงานวิ่ง หรือไม่
        </Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่เคย" onChange={handleChangeBeenInjured} defaultValue={getBeenInjured}/>
        <label>ไม่เคย</label>
        <input type="radio" name="NeverEver" value="เคย" onChange={handleChangeBeenInjured} defaultValue={getBeenInjured} />
        <label>เคย</label>
        <br />
        <Query>
          ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)
        </Query>
        <br />
        <input type="radio" name="NeverEver" value="ไม่เคย" onChange={handleChangeRegularExercise} defaultValue={getRegularExercise} />
        <label>ไม่</label>
        <input type="radio" name="NeverEver" value="ไม่เคย" onChange={handleChangeRegularExercise} defaultValue={getRegularExercise} />
        <label>ใช่</label>
        <br />
        <Query>
          ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด
          ขณะออกกำลังกายหรือไม่
        </Query>
        <br />
        <input type="radio"  name="NeverEver" value="ไม่มี" onChange={handleChangeEverHadChestPain} defaultValue={getEverHadChestPain}/>
        <label>ไม่</label>
        <input type="radio"  name="NeverEver" value="มี" onChange={handleChangeEverHadChestPain} defaultValue={getEverHadChestPain}/>
        <label>มี</label>
      
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
export default connect(mapStateToProps)(MedicalInfo);

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
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  box-sizing: content-box;
  margin: 30px 0px;
`;
const Title = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: center;
  font-size: 25px;
`;
const Box = styled.div`
  border-solid: 1px;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
`;

const Query = styled.div`
  font-size: 22px;
  margin: 17px;
  span {
    display: flex;
    flex: 1;
    margin-top: 10px;
  }
`;

const Input = styled.input`
  appearance: none;
  width: 82%;
  margin: 5px 20px;
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
const Input1 = styled.input`
  appearance: none;
  width: 35%;
  margin: 5px 15px;
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
