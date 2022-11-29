import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #F0FFF0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 80px;
    margin-bottom: 20px;
    ${mobile({fontSize: "60px"})}
`
const Description = styled.div`
    font-size: 26px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "15px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: rosybrown;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get updates from your favourite products and receive many deals.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter