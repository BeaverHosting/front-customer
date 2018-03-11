<template>
    <div class="products">
        <product-card
            v-for="(product,index) in $store.state.products.list"
            :key="product.id"
            :product="product"
            :large="index == 1 ? true : false"
            :buttonType="index == 1 ? 'primary' : 'default'"
        ></product-card>
    </div>
</template>

<style lang="scss" scoped>
    .products {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        z-index: 1;

        .product-card {
            margin : 0 30px;
        }
    }
</style>

<script>
    import ProductCard from '~/components/ProductCard.vue';
    export default {
        name: 'ProductsPage',
        components : {
            ProductCard
        },
        mounted() {
            console.log("[Products] Mounted")
        }
    }
</script>
