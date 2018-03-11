<template>
    <div>
        <img src="~/assets/img/logo.png" alt="Logo de BeaverHosting">
        <nav>
            <nuxt-link to="/features">Features</nuxt-link>
            <nuxt-link to="/products">Products</nuxt-link>
            <nuxt-link to="/trust">Trust</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </nav>
    </div>
</template>


<style lang="scss" scoped>

    img {
        position: relative;
        display: block;
        margin-bottom: 20px;
        max-width: 500px;
        z-index: 1;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 200px;

        a {
            display: block;
            position: relative;
            margin: 0 40px;
            color : $secondColor;

            font: {
                size: 20px;
            }

            text : {
                transform : uppercase;
                decoration : none;
            }

            &::after {
                content :'';
                display: block;
                width: 0;
                height: 3px;
                background: $firstColor;
                transition: all 0.2s ease-out;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    }
</style>

<script>
    export default {
        name : "HomePage",
        mounted() {
            console.log("[Homepage] Mounted")
        }
    }
</script>

