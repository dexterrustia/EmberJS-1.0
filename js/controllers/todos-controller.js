Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function(){
      const title = this.get('newTitle');
      if (!title.trim()) { return; }
  
      const todo = this.store.createRecord('todo',{
        title: title,
        isCompleted: false 
      })
  
      this.set('newTitle', '');
  
      todo.save(); 
    },
    clearCompleted: function(){
      const completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
  }, 

  remaining: function(){
    return this.filterBy('isCompleted',false).get('length');
  }.property('@each.isCompleted'),

  inflection: function(){ 
    return this.get('remaining') === 1 ? 'item' : 'items'
  }.property('remaining'),

  totalCompletes: function(){
    return this.filterBy('isCompleted',true).get('length')
  }.property('@each.isCompleted'),

})