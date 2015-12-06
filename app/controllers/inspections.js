import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createInspection() {
      var inspection = this.store.createRecord("inspection", {
        title: this.get('title'),
        isCompleted: this.get('isCompleted')
      });
      inspection.save();

      this.set('title', '');
      this.set('isCompleted', false);
    }
  }
});

