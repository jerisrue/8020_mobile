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
            bindto: '#chart',
            data: {
                columns: [
                    ['healthy', 60, 80, 80, 60, 85, 75],
                    ['unhealthy', 40, 20, 20, 40, 15, 25],
                ],
                type: 'bar',
                groups: [
                    ['healthy', 'unhealthy' ]
                ]
            },
            grid: {
                y: {
            lengthines: [{value:0}]
                }
            }
        });
    });
  }
});