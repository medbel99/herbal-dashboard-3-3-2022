import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';
import Menu from "~/components/elements/menu/Menu.jsx"
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';
import menuData from "~/public/static/data/menu.json"
const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        {/* <MenuCategoriesDropdown /> */}
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

export default HeaderDefault;
