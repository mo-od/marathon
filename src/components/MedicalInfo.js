import React from 'react'
import styled from 'styled-components'

function MedicalInfo() {
    return (
        <Container>
            
            <Box>
            <Title>ข้อมูลทางการแพทย์</Title>
            <Query>หมู่เลือด</Query>
            <input type="radio" id="groupA" name="groupA" value="groupA"/>
            <label for="groupA">A</label>
            <input type="radio" id="groupB" name="groupB" value="groupB"/>
            <label for="groupB">B</label>
            <input type="radio" id="groupO" name="groupO" value="groupO"/>
            <label for="groupO">O</label>
            <input type="radio" id="groupAB" name="groupAB" value="groupAB"/>
            <label for="groupAB">AB</label>
            <br/>
            <Query>ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่</Query>
            <br/>
            <input type="radio" /><label>ไม่มี</label><input type="radio" /><label>มี</label>
            <Input type="text"/>
            <br/>
            <Query>ท่านมีประวัติการผ่าตัดมาก่อน หรือไม่ </Query>
            <br/>
            <input type="radio" /><label>ไม่มี</label><input type="radio" /><label>มี</label>
            <Input1 type="text" value="โปรดระบุตำแหน่ง"  /><Input1 type="text" value="ปีที่ได้รับการผ่าตัด" />
            <br/>
            <Query>ท่านมีโรคประจำตัว หรือไม่</Query>
            <br/>
            <input type="radio" /><label>ไม่มี</label><input type="radio" /><label>มี</label>
            <Input type="text"/>
            <br/>
            <Query>ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งถรรภ์ก่อนถึงช่างการแข่ง หรือไม่</Query>
            <br/>
            <input type="radio" /><label>ไม่มี</label><input type="radio" /><label>มี</label>
            <br/>
            <Query>ท่านเคยบาดเจ็บ หรือ เจ็บป่าวย จากการเข้าร่วมงานวิ่ง หรือไม่</Query>
            <br/>
            <input type="radio" /><label>ไม่มี</label><input type="radio" /><label>มี</label>
            <br/>
            <Query>ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)</Query>
            <br/>
            <input type="radio" /><label>ไม่</label><input type="radio" /><label>ใช่</label>
            <br/>
            <Query>ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่</Query>
            <br/>
            <input type="radio" /><label>ไม่</label><input type="radio" /><label>มี</label>
            <br/>
            <NextButton><Span>Submit</Span></NextButton>
            </Box>
        </Container>
    )
}

export default MedicalInfo


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
    
  `
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
    
  `

  const Span = styled.div`
  font-size: 20px;
  color: #ffffff;
`
