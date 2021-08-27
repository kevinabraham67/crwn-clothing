import React from 'react';
import  StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSxEtSGXij7nQW7dJzo7MmwPWkLjBWiXiRTAHfrEqyQ5eMQjd6GbTsBqSNs93pAQHPicQKJm1Mx9d6P32KiVTnR00fm8V5ynM';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name ='CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;