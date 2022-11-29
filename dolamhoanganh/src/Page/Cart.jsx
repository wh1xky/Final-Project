import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar1'
import { mobile } from '../Responsive'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({display: "none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 5px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({marginTop: "10px"})}
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductCode = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductColorImage = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: url(https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw2d8c0ad9/sw_22/00468556-01.jpg?sw=22&sh=22);
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 26px;
    margin: 5px;
    ${mobile({margin: "15px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 35px;
    font-weight: 300;
    ${mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
    /* background-color: #eee;
    border: none; */
    margin-top: 5px;
    margin-bottom: 5px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid LightGray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 500;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "25px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }
    console.log(stripeToken)

    useEffect(() => {
        const makeRequest = async ()=> {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                })
                navigate("/", {data: res.data})
            } catch{}
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, navigate])

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>MY CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product => (
                        <Product>
                        <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductCode><b>Product Code:</b> {product._id}</ProductCode>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b> {product.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>${product.price}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$10.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-$5.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>${cart.total + 5}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout 
                        name="QUEEN."
                        image= "https://cdn.dribbble.com/users/1251013/screenshots/3321584/media/bfdd2de5a94f17be698b7a0fd00bd519.jpg?compress=1&resize=400x300"
                        billingAddress
                        shippingAddresss
                        description = {`Your total is $${cart.total + 5}`}
                        amount = {cart.total*100}
                        token = {onToken}
                        stripeKey = {KEY}
                    >
                    <Button>Checkout Now</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart