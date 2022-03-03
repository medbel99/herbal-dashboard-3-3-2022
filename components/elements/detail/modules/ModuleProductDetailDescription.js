import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        
        <ul className="ps-list--dot">
            {product.descriptionArticle}
            <li>{product.blogingArticle}</li>
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
