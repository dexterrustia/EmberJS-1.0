// const { default: Ember } = require("ember");
// const { default: DS } = require("ember-data");

window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FixtureAdapter.extend({
  namespace: "Todo App"
});


 

