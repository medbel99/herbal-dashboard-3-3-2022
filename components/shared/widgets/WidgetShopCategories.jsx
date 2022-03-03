import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import axios from "axios"
import { useRouter } from 'next/router';

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const { slug } = Router.query;

    async function getCategories() {
        setLoading(true);
        const response = await axios.get("https://herbalbackend.herokuapp.com/api/categorie")
        if (response) {
            setCategories(response.data);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.idCategoryClient}
                    className={item.idCategoryClient? 'active' : ''}>
                    <Link href={`/category/${item.idCategoryClient}`}>{item.nomCategory}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
            console.log({items})
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categories</h4>
            {categoriesView}
        </aside>
    );
}; 

export default WidgetShopCategories;
