<template>
    <div class="container-bh"
        v-loading="loading"
    >
        <h1>{{$route.params.name}} - {{containerIpAdress}}</h1>
        <hr>
        <el-form ref="form" :model="form" label-width="120px">
            <el-row type="flex" :gutter="30">
                <el-col :span="16">
                    <el-input v-model="form.name" placeholder="Confirmez le nom du conteneur"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button size="large" type="danger" @click="destroyContainer" :disabled="loading || !formNameMatching">Supprimer le container</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>

    .container-bh {
        position: relative;
        width: 70%;
        margin: 120px 0;
        padding: 20px;
        background: white;
        z-index: 1;
    }

    h1 {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 50px;
        margin: 0 30px;
    }

    .el-input {
        display: block;
        width: 100%;
    }

    .el-button {
        display: block;
        width: 100%;
    }

</style>

<script>
    import axios from 'axios';
    export default {
        name : "ContainerPage",
        data() {
            return {
                loading : false,
                form : {
                    name : null
                }
            }
        },
        asyncData (context) {
            const containerURL = 'container/'+ context.route.params.name+'/'
            let container = {};

            context.app.$axios.$get(containerURL).then((result) => {
                container.status = result
            })

            context.app.$axios.$get(containerURL+"/ip").then((result) => {
                container.ip = result
            })

            context.app.$axios.$get(containerURL+"/port").then((result) => {
                container.port = result
            })

            return {
                container : container
            }
        },
        computed: {
            formNameMatching() {
                if (this.form.name && this.form.name.toLowerCase() === this.$route.params.name.toLowerCase()) return true;
                return false;
            },

            containerIpAdress(){
                if (this.container && this.container.ip && this.container.port) return this.container.ip + ":" + this.container.port
                return null;
            }
        },
        methods: {
            async destroyContainer(containerID) {
                this.loading = true;
                this.$axios.$delete('container/'+containerID).then(result => {
                    this.$notify.success({
                        title: 'Ok',
                        message: 'Le conteneur a bien été supprimé'
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