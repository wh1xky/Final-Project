import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import { login } from "../redux/apiCalls"
import { mobile } from "../Responsive"
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    
`
const ContainerWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url(https://wallpapers.com/images/hd/shopping-girl-fashion-bmcc1ws4ptcip9dl.webp) center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 600;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: RosyBrown;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disable {
        color: green;
        cursor: not-allowed;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state) => state.user)
    const Navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
        Navigate("/")
    }
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <ContainerWrapper>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
            {error && <Error>Invalid username and password</Error>}
            <Link>Forgot Password?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
    </ContainerWrapper>
<Newsletter/>
<Footer/>
</Container>
  )
}

export default Login