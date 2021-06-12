import React from "react";
import styled from "styled-components";

function Emergency() {
  return (
    <Container>
      
      <Box>
      <Title>ผู้ติดต่อฉุกเฉิน</Title>
      <Query> ผู้ติดต่อฉุกเฉินคนที่ 1 </Query>
      <br />
      <label > ชื่อ-นามสกุล </label>
      <Input class name="Name" />
      <br />
      <label> ความสัมพันธ์ </label>
      <Input class name="Relation" />
      <br />
      <label> เบอร์โทรศัพท์ </label>
      <Input class name="Phone" />
      <br />
      <hr />
      <Query> ผู้ติดต่อฉุกเฉินคนที่ 2 </Query>
      <br />
      <label> ชื่อ-นามสกุล </label>
      <Input class name="Name" />
      <br />
      <label> ความสัมพันธ์ </label>
      <Input class name="Relation" />
      <br />
      <label> เบอร์โทรศัพท์ </label>
      <Input class name="Phone" />
      <br />
      <NextButton><Span>Submit</Span></NextButton>

      </Box>
    </Container>
  );
}

export default Emergency;

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
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
border-solid: 1px;
border-radius: 10px;
padding: 20px;
background-color: #ffffff;
`

const Query = styled.div`
  font-size: 22px;
  margin-top: 20px;
    
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
            background: #4CAF50;
            border: none;
            font-size: 18px;
            cursor: pointer;

            &:hover {
                background: #45a049;

            }
`
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
    
  `
  const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`
