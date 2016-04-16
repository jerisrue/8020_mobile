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
        //debugger;
        var unheath = this.get('unhealthy');
        var heath = this.get('healthy');
        var chart = c3.generate({
            bindto: '#pie',
            size: {
                height: Ember.$(window).height()*0.4
            },
            data: {
                columns: [
                    ['unhealthy', unheath],
                    ['healthy', heath]
                ],
                type: 'pie',
                labels: false,
                colors: {
                    healthy: '#33ff33',
                    unhealthy: '#ff0033'
                },
            },
            legend: {
                hide: true
            },
            tooltip: {
                show: false
            },
            onresized: function () {
                //chart.destroy()
                chart.resize({
                    height: Ember.$(window).height()*0.4,
                });
            }
        });
    });
  }
});