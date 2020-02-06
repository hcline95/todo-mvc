var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: TodoModel
});

// Our overall **AppView** is the top-level piece of UI.

var todosCollection = new TodosCollection();

var appView = new AppView();
