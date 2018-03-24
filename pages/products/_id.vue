<template>
    <div class="product"
        v-loading="loading"
    >
        <el-steps :active="0" align-center>
            <el-step title="Etape 1" description="Inscription"></el-step>
            <el-step title="Etape 2" description="Résumé de la commande"></el-step>
            <el-step title="Etape 3" description="Paiement"></el-step>
            <el-step title="Etape 4" description="Confirmation"></el-step>
        </el-steps>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Nom d'utilisateur">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="createContainer" :disabled="loading">Create</el-button>
                <el-button><nuxt-link to="/products" :disabled="loading">Annuler</nuxt-link></el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>

    .product {
        position: relative;
        width: 70%;
        margin: 120px 0;
        padding: 20px;
        background: white;
        z-index: 1;
    }

    .el-step {
        margin-bottom: 60px;
    }

    .el-form {
        margin: 0 auto;
        max-width: 80%;
    }

</style>

<script>
    import axios from 'axios';
    export default {
        name : "ProductPage",
        validate ({ params }) {
            // Doit être un nombre
            return /^\d+$/.test(params.id)
        },
        data() {
            return {
                loading : false,
                form : {
                    name: ''
                }
            }
        },
        computed : {
            product() {
                return this.$store.state.products.list.find(product => {
                    product => product.id == this.$route.params.id
                })
            }
        },
        watch : {
            product(newValue) {
                if (!newValue) {
                    this.$router.push('/products');
                }
            }
        },
        methods: {
            async createContainer() {
                this.loading = true;
                this.$axios.$post('container/', {
                    name : this.form.name
                }).then(result => {
                    this.$router.push('containers/'+this.form.name);
                    this.$notify.success({
                        title: 'Ok',
                        message: 'Le conteneur a bien été créé'
                    });
                }).catch(error => {
                    console.log(error);
                    this.$notify.error({
                        title: 'Erreur',
                        message: 'Impossible d\'effectuer l\'action, ressayez plus tard'
                    });
                }).finally(() => {
                    this.loading = false;
                })
            }
        }
    }
</script>