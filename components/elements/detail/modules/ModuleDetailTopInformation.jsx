import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">{product.pu} MAD</h4>;
    }
    return (
        <header>
            <h1>{product.titleArticle}</h1>
            <div className="ps-product__meta">
                <p>
                    <Link href="/shop">
                        <a className="ml-2 text-capitalize">HERBAL PLUS</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating />
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
