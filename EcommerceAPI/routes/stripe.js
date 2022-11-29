const router = require("express").Router()
const Stripe = require("stripe")

const stripe = Stripe('sk_test_51M2B2WFmt7nyFsgvEGSGAop15C8JRGS5FE81jNYVxHH6NDlXicz8pkbfV6rJTAxGTuAcXBgVG5CV4c81IrbnOMvW00YDaaiow1')

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
})

module.exports = router