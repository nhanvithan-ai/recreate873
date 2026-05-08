const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// CREATE ORDER
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// VERIFY PAYMENT
app.post("/verify-payment", (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const body = order_id + "|" + payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

// START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});