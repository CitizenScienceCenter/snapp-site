<template>
    <div>

        <div class="form-field">
            <label>New Comment</label>
            <input type="text" v-model="newCommentText" />
        </div>

        <button class="button button-primary" @click="newComment">Comment</button>

        <ul>
            <li v-for="comment in comments">
                {{ comment }}
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapState} from 'vuex'


    export default {
        name: "Comments",
        data() {
            return {
                newCommentText: ''
            }
        },
        props: {
          taskId: {
              type: String,
              default: null
          }
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            comments: state => state.c3s.comments.comments
        }),
        mounted: function() {
            this.loadComments();
        },
        methods: {
            loadComments: function() {
                this.$store.dispatch('c3s/comments/getCommentsForID', [this.taskId, 'c3s/comments/SET_COMMENTS', 0] ).then(comments => {


                });
            },
            newComment: function() {

                const comment = {
                    user_id: this.user.id,
                    source_id: this.taskId,
                    content: {
                        text: this.newCommentText
                    }
                };

                this.$store.dispatch('c3s/comments/createComment', comment).then(res => {

                    this.loadComments();

                });
            }
        }
    }

</script>

<style lang="scss">

</style>
