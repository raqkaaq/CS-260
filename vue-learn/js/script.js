/*let app = new Vue({
    el: "#root",
    data: {
        names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
        newName: '',
    },
    methods: {
        addName(){
            if(this.newName === '')
                return;
            this.names.push(this.newName);
            this.newName = '';
        }
    }
});*/

/*let app = new Vue({
    el: '#root',
    data:{
        title: 'Brought to you by a block of cheese',
        className: 'red',
        isLoading: true,
    },
    methods: {
        toggleLoading() {
            this.isLoading = !this.isLoading;
        }
    },
})*/
/*
let app = new Vue({
    el: "#root",
    data: {
        message: 'I really like bread',
        tasks: [{
            description: "Create loaves of bread",
            completed: true
        },
        {
            description: "Create fish",
            completed: false
        },
        {
            description:"Cleaning up a mess",
            completed: false
        }
        ]
    },
    computed: {
        screaming(){
            return this.message.toUpperCase();
        },
        incompleteTasks(){
            return this.tasks.filter(task=> !task.completed);
        }
    }
})
*/
 let app = new Vue({
     el: '#app',
     data: {
         todos: [{
             text: "make an app",
             completed: false
         },
        {
            text: "declare a thumb war",
            completed: false
        },
        {
            text: "profit",
            completed: false
        }],
        message: '',
        show: 'all',
        drag: {},
     },
     methods: {
         addItem(){
             this.todos.push({text: this.message, completed:false});
             this.message = '';
         },
         deleteItem(item){
             var index = this.todos.indexOf(item);
             if(index > -1)
                this.todos.splice(index,1);
         },
         showAll(){
             this.show = 'all';
         },
         showActive(){
             this.show = 'active';
         },
         showCompleted(){
             this.show = 'completed';
         },
         deleteCompleted(){
             this.todos = this.todos.filter(item => {return !item.completed;});
         },
         dragItem(item){
             this.drag = item;
         },
         dropItem(item){
             const indexItem = this.todos.indexOf(this.drag);
             const indexTarget = this.todos.indexOf(item);
             this.todos.splice(indexItem, 1);
             this.todos.splice(indexTarget, 0, this.drag);
         }
     },
     computed:{
         activeTodos(){
             return this.todos.filter(item =>{return !item.completed})
         },
         filteredTodos(){
            if(this.show === 'active')
                return this.todos.filter(item => {return !item.completed;});
            if(this.show === 'completed')
                return this.todos.filter(item => {return item.completed;});
            return this.todos;
        }
     }
 })