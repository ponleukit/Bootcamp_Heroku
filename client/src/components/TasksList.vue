<template>
  <div class="container">
    <!-- Input Form -->
      <form v-on:submit.prevent="submitForm">
        <div class="input-field col s12 form-group">
          <input type="text" id="task" class="autocomplete" v-model="task" required>
          <label for="task">Task</label>
        </div>
        <button class="waves-effect waves-light btn form-group">Post</button>
      </form>
    <!-- Display Tasks -->
      <div class="row "
      v-for="(post, index) in posts"
      v-bind:item="post"
      :index="index"
      :key="post._id"
      >
        <div class="col s4 m12">
          <div class="card #558b2f light-green darken-3">
            <div class="card-title white-text" @dblclick="deleteTask(post._id)">
              <h1>{{post.task}}</h1>
              <p>{{post.createdAt}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script>
import TasksService from '../TasksService';
export default {
  name: 'TasksList',
  data(){
    return {
      posts: [],
      error: '',
      task: ''
    }
  },
  methods:{
      async submitForm(){
        TasksService.insertPost(this.task);
        window.location.reload();
      },
      async deleteTask(id){
         await TasksService.deletePost(id);
        window.location.reload();
        
      }
  },
  async created(){
    TasksService
            .getPost()
            .then(res => {
                this.posts = res.data;
                console.log(this.posts);
            })
            .catch(err => this.error = err);
  }
}
</script>