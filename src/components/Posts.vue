<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Post List
                <b-link href="#/posts/create">(Add Post)</b-link>
            </h2>
            <b-table striped hover :items="posts" :fields="fields">
                <template slot="actions" scope="row">
                    <b-btn size="sm" @click.stop="join(row.item._id)">Watch</b-btn>
                </template>
            </b-table>
            <ul v-if="errors && errors.length">
                <li v-for="(error,index) of errors" :key="index">
                    {{error.message}}
                </li>
            </ul>
        </b-col>
    </b-row>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Posts',
        data () {
            return {
                fields: {
                    post_title: { label: 'Post Title', sortable: true, 'class': 'text-center' },
                    post_description: { label: 'Post Title', sortable: true, 'class': 'text-center' },
                    post_author: { label: 'Post Title', sortable: true, 'class': 'text-center' },
                    created_date: { label: 'Created Date', sortable: true },
                    actions: { label: 'Action', 'class': 'text-center' }
                },
                posts: [],
                errors: []
            }
        },
        created () {
            axios.get(`http://localhost:3000/api/post`)
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        methods: {
            join (id) {
                console.log(id)
                this.$router.push({
                    name: 'indexPost',
                    params: { id: id }
                })
            }
        }
    }
</script>
