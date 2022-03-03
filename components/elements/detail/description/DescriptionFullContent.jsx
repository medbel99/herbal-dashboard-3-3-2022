import React from 'react';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';

import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';

const CheckoutPage = () => {
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
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout product={product} />
            </div>
            <Newletters layout="container" />
        </>
    );
};

const DescriptionFullContent = ({ product }) => (
    <div className="ps-product__content">
        <CheckoutPage product={product} />
    </div>
);


export default DescriptionFullContent;
