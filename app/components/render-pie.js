import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    test: function(){

    },
  },

  didInsertElement: function () {
    this._super();

    Ember.run.scheduleOnce('afterRender', this, function () {
      // some jQuery UI stuff
      console.log('afterRender ran');

      //alert("ffstga");

        var chart = c3.generate({
            bindto: '#pie',
            data: {
                columns: [
                    ['data1', 40],
                    ['data2', 60]
                ],
                type: 'pie',
                labels: false
            },
            legend: {
                hide: true
            }
        });
    });
  }
});