<template>
    <div class="product-card" :class="{'large' : large}">
        <h1 class="product-card-title">{{product.title}}</h1>
        <figure class="product-card-logo"></figure>
        <div class="product-card-body">
            <ul>
                <li v-for="(value, index) in product.values" :key="index">{{value}}</li>
            </ul>
        </div>
        <el-button :type="buttonType">
            <nuxt-link :to="'products/' + product.id">Commander</nuxt-link>
        </el-button>
    </div>
</template>

<style lang="scss" scoped>
    .product-card {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 25px;
        background: #FFF;
        -webkit-box-shadow: 0px 0px 20px -5px rgba(105,105,105,1);
        -moz-box-shadow: 0px 0px 20px -5px rgba(105,105,105,1);
        box-shadow: 0px 0px 20px -5px rgba(105,105,105,1);

        &-title {
            margin : 0 0 15px;
            color: $firstColor;
            font: {
                size: 22px;
            }
        }

        &-logo {
            display: block;
            width: 100%;
            height: 100px;
            margin: 0 0 15px;
            padding: 0;
            background: $thirdColor;
        }

        &-body {
            margin : 0 0 20px;
            ul {
                display: block;
                margin: 0;
                padding: 0;
                list-style: square;

                li {
                    display: block;
                    margin: 0 0 6px;
                    font-size: 12px;
                    font-weight: 100;
                    text-align: left;
                }
            }
        }

        &.large {
            transform: scale(1.3);
            margin: 0 40px;

            .product-card-title {
                font: {
                    size: 26px;
                }
            }
        }
    }
</style>

<script>
    export default {
        name : "ProductCard",
        props : {
            large: {
                type : Boolean,
                default : false
            },
            buttonType : {
                type : String,
                default : null
            },
            product: {
                type : Object,
                default : () => {
                    return {
                        title : "Solution Wordpress",
                        img : null,
                        values : [
                            "PHP 7.0",
                            "Solution de sécurité",
                            "Hébergement instantané",
                            "Mises à jours Wordpress automatiques",
                            "Sauvegarde régulières et illimités",
                            "Nom de domaine offert"
                        ]
                    }
                }
            }
        }
    }
</script>



