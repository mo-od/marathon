import React from "react";
import styled from "styled-components";

function AboutRunning() {
  return (
    <Container>
      <Box>
      <Title>ข้อมูลเกี่ยวกับการวิ่ง</Title>
        <Query>
          เคยลงงานแข่ง Mini Marathon / Half Marathon / Full Marathon
          มาก่อนหรือไม่ </Query>
          <span>
            <input type="radio" id="ever" class name="ever" value="ever" />
            <label for="ever">เคย</label>
            <input type="radio" id="never" class name="never" value="never" />
            <label for="never">ไม่เคย</label>
          </span>
        

        <br></br>
        <Label> เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ </Label>
        <br />
        <Input placeholder="00.00 น."/>
        <br />
        <NextButton>
          <Span>Submit</Span>
        </NextButton>
      </Box>
    </Container>
  );
}

export default AboutRunning;

const Container = styled.div`
  
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
  margin-top: 50px;
  margin-bottom: 15px;
  span {
    display: flex;
    flex: 1;
    margin-top: 10px;
  }
`;
const Label = styled.div`
  font-size: 22px;
  margin-top: 30px;
`;

const NextButton = styled.button`
  margin-top: 150px;
  
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

  &:hover {
    background: #45a049;
  }
`;


const Input = styled.input`
    appearance: none;
    width: 100%;
    margin: 0px;
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
  `

  const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`
