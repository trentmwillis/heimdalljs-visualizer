import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Controller.extend({
  graph: inject.service(),

  actions: {
    viewFullGraph() {
      this.get('graph').deselectNode();
    },

    viewSelectedNode() {
      if (!this.get('graph.selectedNode')) {
        this.transitionToRoute('nodes');
      }
    }
  }
});
