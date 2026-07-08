// this file contains endpoints for API tests - useful when test suite becomes larger and any changes to
// endpoints can be changed in one place (here) instead of in multiple locations across test files

export const endpoints = {
    PRODUCTS: '/products',
    ADD_PRODUCT: '/products/add',
    SEARCH_PRODUCTS: '/products/search',
    GET_PRODUCT_BY_ID: (id: number) => `/products/${id}`,
    LOGIN: '/auth/login',
    USERS: '/users',
    ADD_USER: '/users/add',
    GET_USER_BY_ID: (id: number) => `/users/${id}`,
    SEARCH_USERS: '/users/search',
};