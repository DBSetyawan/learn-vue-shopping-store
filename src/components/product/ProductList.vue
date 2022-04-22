<template>
    <div>
        <ProductListItem v-for="prd in productItems" :key="prd.id" :product="prd"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductListItem from './ProductListItem.vue';
export default {
name :'ProductList',
components:{
    ProductListItem
},
computed:{
    ...mapGetters(['productItems'])
},
created(){
    this.$store.dispatch('fetchProduct');
}
}
</script>

<style>
</style>
