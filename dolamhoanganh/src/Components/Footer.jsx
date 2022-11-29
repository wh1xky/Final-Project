import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h2`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "GhostWhite"})}
`
const ContactItem = styled.div`
    margin-bottom: 12px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    margin-top: -20px;
    width: 50%;
    height: 30%;
    ${mobile({marginTop: "-8px"})}
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>QUEEN.</Logo>
            <Description>
            QUEEN. business concept is to offer fashion and quality at the best price in a sustainable way. QUEEN. has since it was founded in 1998 grown into one of the world’s leading fashion companies. The content of this site is copyright-protected and is the property of QUEEN. Co.LTD.
            </Description>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Quick Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms of Use</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>20 Cong Hoa, Ward 12, TB District, HCMC</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>Telephone: 028.7300.2266</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@queen.dev</ContactItem>
            <Payment src="https://n1gloves.com/img/cms/pagos_1.png"/>
        </Right>
    </Container>
  )
}

export default Footer