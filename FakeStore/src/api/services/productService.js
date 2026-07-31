import apiClient from '../apiClient';
import { ENDPOINTS } from '../endpoints';

// Creating an industry standard Service layer
// This abstracts the actual fetching logic away from UI components
const productService = {
    /**
     * Fetches all products
     * @param {Object} params Query parameters like sorting, limit, etc.
     * @returns {Promise} Resolves to product list
     */
    getAllProducts: async (params = {}) => {
        return await apiClient.get(ENDPOINTS.PRODUCTS.GET_ALL, { params });
    },

    getProductById: async (id) => {
        return await apiClient.get(ENDPOINTS.PRODUCTS.GET_BY_ID(id));
    },

    getCategories: async () => {
        return await apiClient.get(ENDPOINTS.PRODUCTS.GET_CATEGORIES);
    },

    getProductsByCategory: async (category) => {
        return await apiClient.get(ENDPOINTS.PRODUCTS.GET_BY_CATEGORY(category));
    }
};

export default productService;
