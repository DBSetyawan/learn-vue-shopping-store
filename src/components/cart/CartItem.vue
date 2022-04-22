<template>
    <tr>
        <td>{{ cart.title }}</td>
        <td><input type="number" class="form-control" min="1" style="width:100px" v-model="cart.qty"/> </td>
        <td>${{total}}</td>
        <td>
            <button class="btn btn-danger" @click="deleteCart(cart)"> Remove</button>
        </td>
    </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
name: 'CartItem',
props:{
    cart:{
        type: Object,
        required:true
        }
    },
    methods:{
        ...mapActions(['deleteCart'])
    },
    computed:{
        total(){
            return (this.cart.qty * this.cart.price).toFixed(2)
        }
    }
}
</script>

<style>
</style>
