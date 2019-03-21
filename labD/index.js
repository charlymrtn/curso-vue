Vue.component('blog-post',{
    props: ['post','value'],
    template: `<div class="blog-post">
                <h2>{{post.title}}</h2>
                <button @click="$emit('enlarge-text',1)">
                    Zoom
                </button>
                <div v-html="post.content">

                </div>
                <input :value="value" @input="$emit('input',$event.target.value)" placeholder="username">
                <p>{{ value }}</p>
            </div>`
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [
            {id: 1, title: 'se me perdio la cadenita', content: 'Vivamus blandit at risus non consectetur. Quisque ut nisi mattis.', inicial: 'a'},
            {id: 2, title: 'compartiendo con Vue', content: 'Sed efficitur et neque in pulvinar. Nam vitae hendrerit lorem.', inicial: 'b'},
            {id: 3, title: 'diversion programando', content: 'Mauris vestibulum turpis id sollicitudin vehicula. Ut at nunc pellentesque.', inicial: 'c'},
        ],
        postFontSize: 15
    },
    methods: {
        onEnlargeText: function(enlargeAmount){
            this.postFontSize += enlargeAmount;
        }
    }
});