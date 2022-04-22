import vue from 'vue';
import vx from 'vuex';

import product from "./product";
import cart from "./cart";
vue.use(vx);

export default new vx.Store({
    modules:{
        product,
        cart
    }  
})