import React, { useEffect,useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import categories from '../../../public/static/data/static-categories.json';
import axios from "axios";

const { SubMenu } = Menu;

const PanelCategories = ()=> {
 
    useEffect(() => {
        getAllCategory();
      },[]);
    const [data,setData]= useState([])
    const getAllCategory = async ()=>{
        const response = await axios.get("https://herbalbackend.herokuapp.com/api/categorie")
        setData(response.data)
    }
        return (
            <Menu
                mode="inline"
                // openKeys={this.state.openKeys}
                // onOpenChange={this.onOpenChange}>
                >
                {data.length>0?data.map(category => (
                    <Menu.Item key={category.idCategoryClient}>
                        <a href={`/shop?category=${category.idCategoryClient}`}>
                            {category.nomCategory}
                        </a>
                    </Menu.Item>
                )):null}
            </Menu>
        );
}
export default PanelCategories;
