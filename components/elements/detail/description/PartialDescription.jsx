import React from 'react';
import Checkout from '~/components/partials/account/Checkout';
import Newletters from '~/components/partials/commons/Newletters';


const CheckoutPage = ({ product }) => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
        },
    ];

    return (
        <>
            <div className="ps-page--simple">
                <Checkout product={product} />
            </div>
        </>
    );
};

const PartialDescription = ({ product }) => (
    <div className="ps-document">
        <CheckoutPage product={product} />
    </div>
);

export default PartialDescription;
