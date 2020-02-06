// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName: 'li',

  className: '.done',

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  events: {
    'click .toggle': 'completedTask',
    'click .destroy': 'deleteTask'
  },

  initialize: function() {
    this.listenTo(this.model, 'change:completed', )
  },
  completedTask: function() {
    if (this.model.get('completed')) {
      this.model.set('completed', false)
    } else {
      this.model.set('completed', true)
    }
    this.render()
  },

  toggleCompleted: function() {

  },

  deleteTask:function(){
    this.remove()
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
