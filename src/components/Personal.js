import React from "react";
import styled from "styled-components";


function Personal() {
  return (
    <Container>
      <Box>
        <Title>ข้อมูลส่วนตัว</Title>
        <select>
          <option value="option1">นางสาว</option>
          <option value="option2">นาง</option>
          <option selected value="option3">
            นาย
          </option>
          <option value="option4">เด็กหญิง</option>
          <option value="option5">เด็กชาย</option>
        </select>
        <Label for="firstNameT"> ชื่อ : </Label>
        <Input name="firstNameT" placeholder="กรุณากรอกชื่อ" />
        <Label for="lastNameT"> นามสกุล : </Label>
        <Input name="lastNameT" placeholder="กรุณากรอกนามสกุล" />
        <br />

        <select>
          <option value="option6">Miss</option>
          <option value="option7">Mrs</option>
          <option selected value="option8">
            Mr
          </option>
        </select>
        <Label for="firstNameE"> FirstName : </Label>
        <Input name="firstNameE" placeholder="Please Enter Your FirstName" />
        <Label for="lastNameE"> LastName : </Label>
        <Input name="lastNameE" placeholder="Please Enter Your LastName" />
        <br />
        <Label for="DateBirth"> วันเดือนปีเกิด : </Label>
        <Input name="Date" placeholder="XX-XX-1999" />
        <br />
        <Label for="Email"> Email: </Label>
        <Input name="Email" placeholder="e.g.........@......." />
        <br />
        <Label for="IdPersonal"> เลขบัตรประจำตัวประชาชน : </Label>
        <Input name="IdPersonal" placeholder="X-XXXX-XXXX-XXXX" />
        <br />
        <Label for="Address"> ที่อยู่ : </Label>
        <Input name="Address" placeholder="กรุณากรอกที่อยู่" />
        <br />
        <Label for="Phone"> เบอร์โทรศัพท์: </Label>
        <Input name="Phone" placeholder="+66-XXXX-XXXX" />
        <br />
        <Label for="BIB"> ชื่อบนเบอร์วิ่ง: </Label>
        <Input name="BIB" placeholder="XXXXXXXXXX" />
        <br />
        <Label for="Image"> รูปถ่ายหน้าตรง</Label>
        <br />
        <input
          type="file"
          name="picField"
          id="picField"
          size="24"
          onchange="preview_2(this);"
          alt=""
        />

        <NextButton>
          <Span>Submit</Span>
        </NextButton>
      </Box>
    </Container>
  );
}

export default Personal;

const Box = styled.div`
  border-solid: 1px;
  border-radius: 10px;
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
  justify-content: center;
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

const Select = styled.div`
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`;

const Label = styled.div``;

const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`
