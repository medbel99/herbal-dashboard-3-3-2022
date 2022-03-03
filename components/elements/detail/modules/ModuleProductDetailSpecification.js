import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({product}) =>{

return(<div className="ps-product__specification">
        <p>
            <strong>SKU:</strong> {product.idClientProducts.toUpperCase()}
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            <Link href="/shop">
                <a>{product.categoryProduct.nomCategory}</a>
            </Link>
        </p>
    </div>
);
}


export default ModuleProductDetailSpecification;
