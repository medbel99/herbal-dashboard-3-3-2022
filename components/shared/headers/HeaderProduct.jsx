import React, { useEffect } from 'react';
import MenuCategories from '~/components/shared/headers/modules/MenuCategories';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import ProductOnHeader from '~/components/elements/products/ProductOnHeader';
import { stickyHeader } from '~/utilities/common-helpers';
import Link from 'next/link';
import Logo from '~/components/elements/common/Logo';
import Menu from "~/components/elements/menu/Menu.jsx"
import menuData from "~/public/static/data/menu.json"


const HeaderProduct = ({ product }) => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--1 header--product"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
                            </div>
                            <div className="menu__content">
                                <MenuCategories />
                            </div>
                        </div>
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        {/* <HeaderActions /> */}
                        <Menu
                            source={menuData.menuPrimary.menu_1}
                            className="menu"
                        /> 
                    </div>
                </div>
            </div>
            <NavigationDefault />
           
        </header>
    );
};
export default HeaderProduct;
