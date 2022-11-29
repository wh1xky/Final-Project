import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { mobile } from "../Responsive"

const Container = styled.div`
    
`
const ContainerWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url(https://wallpapers.com/images/hd/greyscale-keira-knightley-fashion-zxrj7eey6ljmda6g.webp) center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 600;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 17px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: RosyBrown;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <ContainerWrapper>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                By creating an account, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from QUEEN. at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View <b>Terms of Use</b>.
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
        </ContainerWrapper>
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default Register