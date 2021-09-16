import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JTvhZFQ1c8yUIdAseqii4KRK18U95pziwArSyk0Tm255X6Kr4YvcQGt9RVnzlXBtdnQUGa29YTIQmTGO52LFPRx00pxtEujOT"

    const onToken = token => {
        console.log(token)
        alert("payment successful")
    }

    return(
        <StripeCheckout 
        label ="Pay Now"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton
