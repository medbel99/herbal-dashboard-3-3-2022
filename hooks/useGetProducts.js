import { useState } from 'react';
import {
    getProductsByCategoriesHelper,
    getProductsByCollectionHelper,
} from '~/utilities/strapi-fetch-data-helpers';
import axios from "axios"
import ProductRepository from '~/repositories/ProductRepository';

export default function useGetProducts() {
    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState(null);
    const [product, setProduct] = useState(null);
    return {
        loading,
        productItems,
        product,
        setProductItems: (payload) => {
            setProductItems(payload);
        },

        setLoading: (payload) => {
            setLoading(payload);
        },

        getProductsByCollection: async (payload) => {
            setLoading(true);
            const responseData = await axios.get(`https://herbalbackend.herokuapp.com/api/products/product_category/${payload}`);
            if (responseData.data) {
                setProductItems(responseData.data);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        getProductsDealOfDay: async () => {
            setLoading(true);
            const responseData = await axios.get(`https://herbalbackend.herokuapp.com/api/products`);
            if (responseData.data) {
                setProductItems(responseData.data);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        getProductsByCategory: async (payload) => {
            setLoading(true);
            const responseData = await getProductsByCategoriesHelper(payload);
            if (responseData) {
                setProductItems(responseData.items);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        getProducts: async (payload) => {
            setLoading(true);
            let responseData;
            if (payload) {
                responseData = await axios.get("https://herbalbackend.herokuapp.com/api/products");
            } else {
                const queries = {
                    _limit: 12,
                };
                responseData = await axios.get("https://herbalbackend.herokuapp.com/api/products");
            }
            if (responseData) {
                setProductItems(responseData.data);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },

        getProductById: async (payload) => {
            setLoading(true);
            const responseData = await ProductRepository.getProductsById(
                payload
            );
            if (responseData) {
                setProduct(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },
    };
}
