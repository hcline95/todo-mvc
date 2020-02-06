AppView = Backbone.View.extend({
  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter',
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added.
  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = $('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
    this.listenTo(todosCollection, 'change:completed', this.completed())
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function (todo) {
    var view = new TodoView({ model: todo });
    this.completed()
    this.$list.append(view.render().el);
  },
  all: function(){

  },

  active:function(){

  },

  completed:function(){
    console.log('completed was rendered')
    console.log(todosCollection.where({completed:true}))
  },

  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {
      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });

      this.$input.val('');
    }
  }
});
