import React from 'react'
import styled from 'styled-components'

function SouvenirShirt() {
    return (
        <Container>
            
            <Box>
            <Title>เสื้อที่ระลึก</Title>
            <Query>ไซส์เสื้อ</Query>
            <input type="radio" /><label>XS</label>
            <input type="radio" /><label>S</label>
            <input type="radio" /><label>M</label>
            <input type="radio" /><label>L</label>
            <input type="radio" /><label>XL</label>
            <input type="radio" /><label>XXL</label>
            <input type="radio" /><label>XXXL</label>
            <NextButton><Span>Submit</Span></NextButton>
            </Box>
        </Container>
    )
}

export default SouvenirShirt

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
