import axios from "axios";

const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

export const getProducts = async (sortOrder) => {
    try {
        const response = await apiRequest.get(`/products?sort=${sortOrder ? sortOrder : 'asc'}`)
        return response.data;
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export const getAllCategories = async () => {
    try {
        const response = await apiRequest.get('/products/categories')
        return response.data;
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export const getCategoriesInfo = async (category) => {
    try {
        const response = await apiRequest.get(`/products/category/${category}`)
        return response.data;
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}