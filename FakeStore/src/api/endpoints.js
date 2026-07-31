// Centralized endpoints file for easier maintenance
// Using this pattern avoids hardcoding URLs directly in components or services

export const ENDPOINTS = {
    PRODUCTS: {
        GET_ALL: '/products',
        GET_BY_ID: (id) => `/products/${id}`,
        GET_CATEGORIES: '/products/categories',
        GET_BY_CATEGORY: (category) => `/products/category/${category}`,
    },
    CART: {
        GET_ALL: '/carts',
        GET_BY_USER: (userId) => `/carts/user/${userId}`,
    },
    // Add other resource endpoints here...
};
