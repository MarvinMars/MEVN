<template>
    <b-row>
        <b-col align-self="start">&nbsp;</b-col>
        <b-col cols="6" align-self="center">
            <h2>
                Add Room
                <b-link href="#/posts">(Posts List)</b-link>
            </h2>
            <b-form @submit="onSubmit">
                <b-form-group
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Posts Title">
                    <b-form-input id="post_title" :state="state" v-model.trim="post.post_title"></b-form-input>
                </b-form-group>
                <b-form-group
                              horizontal
                              :label-cols="6"
                              breakpoint="md"
                              label="Enter Posts Description">
                    <b-form-input id="post_description" :state="state" v-model.trim="post.post_description"></b-form-input>
                </b-form-group>
                <b-form-group
                              horizontal
                              :label-cols="2"
                              breakpoint="md"
                              label="Enter Posts Author">
                    <b-form-input id="post_author" :state="state" v-model.trim="post.post_author"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
            </b-form>
        </b-col>
        <b-col align-self="end">&nbsp;</b-col>
    </b-row>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'createPost',
        data () {
            return {
                post: {}
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault()
                axios.post(`http://localhost:3000/api/post`, this.post)
                    .then(response => {
                        this.$router.push({
                            name: 'Posts'
                        })
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>


<style scoped>

</style>