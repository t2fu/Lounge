const Comments = Vue.component('comments', {
 props: ['message','user'],
 template: '<div class="comments"><h3>{{user}}</h3><div class="comment_body"><p>{{ message }}</p></div></div>'
});
