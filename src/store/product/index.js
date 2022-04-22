import axios from 'axios';
import {API_URL} from '../../constants'
const state = {
    productItems: []
};

const getters = {
    productItems(state){
        return state.productItems;
    }
};
const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload){
        state.productItems = payload;

    }
};
const actions = {
    async fetchProduct(context){
        const { data } = await axios.get(`${API_URL}/products`);
        context.commit('UPDATE_PRODUCT_ITEMS', data);

    }
};

const productModule = {
    state,
    getters,
    mutations,
    actions
};

export default productModule;