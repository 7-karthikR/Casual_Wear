/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    // 🔹 Add to Cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        setCartItems(prev => {
            let cartData = structuredClone(prev);

            if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                    cartData[itemId][size] += 1;
                } else {
                    cartData[itemId][size] = 1;
                }
            } else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }

            return cartData;
        });

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId, size },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // 🔹 Cart Count
    const getCartCount = () => {
        let totalCount = 0;

        for (const productId in cartItems) {
            for (const size in cartItems[productId]) {
                if (cartItems[productId][size] > 0) {
                    totalCount += cartItems[productId][size];
                }
            }
        }

        return totalCount;
    };

    // 🔹 Update Quantity
    const updateQuantity = async (itemId, size, quantity) => {

        setCartItems(prev => {
            let cartData = structuredClone(prev);
            if (cartData[itemId]) {
                cartData[itemId][size] = quantity;
            }
            return cartData;
        });

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/update',
                    { itemId, size, quantity },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // 🔹 Cart Total Amount (FIXED)
    const getCartAmount = () => {
        let totalAmount = 0;

        for (const productId in cartItems) {

            const productInfo = products.find(
                (product) => product._id === productId
            );

            if (!productInfo) continue; // ✅ important fix

            for (const size in cartItems[productId]) {
                const quantity = cartItems[productId][size];

                if (quantity > 0) {
                    totalAmount += productInfo.price * quantity;
                }
            }
        }

        return totalAmount;
    };

    // 🔹 Fetch Products
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');

            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // 🔹 Get User Cart
    const getUserCart = async (userToken) => {
        try {
            const response = await axios.post(
                backendUrl + '/api/cart/get',
                {},
                { headers: { token: userToken } }
            );

            if (response.data.success) {
                setCartItems(response.data.cartData);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // 🔹 Load Products
    useEffect(() => {
        getProductsData();
    }, []);

    // 🔹 Load Token + Cart
    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setToken(storedToken);
            getUserCart(storedToken);
        }
    }, []);

    // 🔹 Context Value
    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch,
        showSearch, setShowSearch,
        cartItems, setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token, setToken
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;