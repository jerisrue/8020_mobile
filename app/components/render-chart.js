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
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    ['healthy', 60, 80, 80, 60, 85, 75],
                    ['unhealthy', 40, 20, 20, 40, 15, 25],
                ],
                type: 'bar',
                groups: [
                    ['healthy', 'unhealthy' ]
                ],
                colors: {
                    healthy: '#33ff33',
                    unhealthy: '#ff0033'
                },
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