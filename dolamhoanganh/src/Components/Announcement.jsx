import styled from "styled-components"
import {mobile} from "../Responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    ${mobile({width: "390px", fontSize: "15px"})}
`

const Announcement = () => {
  return (
    <Container>
        GOOD DEAL! FREE SHIPPING ON ORDERS OVER $100
    </Container>
  )
}

export default Announcement