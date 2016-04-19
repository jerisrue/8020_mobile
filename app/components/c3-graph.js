import Ember from 'ember';
import C3Chart from './c3-chart'


export default C3Chart.extend({

    dataDidChange: function() {
        //this._super();
        //console.log("made it to extended dataDidChange")
        var self = this;
        var chart = self.get('chart');
        //console.log(self.get('data'));
        chart.load(self.get('data'));
    }.observes('data').on('didInsertElement'),
});
