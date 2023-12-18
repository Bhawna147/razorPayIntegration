import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })
        
        // console.log(data);
    //    console.log(window);

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Bhawna",
            description: "RazorPay Desc......",
            image: "https://example.com/logo",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Bhawna",
                email: "bhawna@gmail.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

        // console.log(data);
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={10} img={"data:image/jpeg;base64,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"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home