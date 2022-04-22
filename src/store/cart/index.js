import axios from 'axios';
import {API_URL} from '../../constants'
const state = {
    cartItems: []
};

const getters = {
    fetchcartItems(state){
        return state.cartItems;
    },
    cartTotals(state){
        return state.cartItems.reduce((acc, carts)=> { 
            return carts.qty * carts.price + acc;
        }, 0).toFixed(2);
    }
};
const mutations = {
    UPDATE_ITEM_ITEMS(state, payload){
        state.cartItems = payload;
    },
    ADD_CARTS(state, payload){
        state.cartItems.push(payload)
    },
    DELETE_ITEMS(state, payload){
        const index = state.cartItems.findIndex(item => item.id === payload.id)
        state.cartItems.splice(index, 1)
    }
};
const actions = {
    async fetchCart(context){
        const { data } = await axios.get(`${API_URL}/cart`);
        context.commit('UPDATE_ITEM_ITEMS', data);
    },
    async addCart(ctx, payload){
        payload.id = Date.now().toString();
        const {data} = await axios.post(`${API_URL}/cart`, payload);
        ctx.commit('ADD_CARTS', data)
    },
    async deleteCart(ctx, payload){
        await axios.delete(`${API_URL}/cart/${payload.id}`)
        ctx.commit('DELETE_ITEMS', payload)
    }
       
};

const cartModules = {
    state,
    getters,
    mutations,
    actions
};

export default cartModules;