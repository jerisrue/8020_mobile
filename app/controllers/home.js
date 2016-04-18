import Ember from 'ember';

export default Ember.Controller.extend({
    healthy: 8,
    unhealthy: 2,

    init: function() {
    this._super.apply(this, arguments);
    var self = this;

        Ember.run.scheduleOnce('afterRender', this, function () {
        //Ember.run.later(function() {
            self.get('data.columns').push(
                ["healthy", self.get('healthy')]);
            self.get('data.columns').push(
                ["unhealthy", self.get('unhealthy')]);

            self.notifyPropertyChange('data');
        //},500);
        });
    },
    data: {
        columns: [
            /*['unhealthy', 0],
            ['healthy', 0]*/
        ],
        type: 'pie',
        labels: false,
        colors: {
            healthy: '#33ff33',
            unhealthy: '#ff0033'
        },
    },
    actions: {
        incUn: function(){
            //debugger;
            var t = this;
            var un = t.get('unhealthy');
            t.set('unhealthy', un + 1);
            console.log(t.get('data'));
            var d = t.get('data');
            d.columns[1][1] = un;//push(un);
            t.set('data',d);
            console.log('New datapoint added');

            Ember.run.next(this, function() {
            //Ember.run.scheduleOnce('afterRender', this, function () {
            //Ember.run.later(function(){
                //d.columns[1][1] = un;//push(un);

                console.log(this.get('data'));
                ///debugger;
                this.notifyPropertyChange('data');
            });
        },
        incHe: function(){
            var t = this;
            var he = t.get('healthy');
            t.set('healthy', he + 1);
            console.log(t.get('data'));
            var d = t.get('data');
            //t.set('dataset', t.get('dummyData'));
            //Ember.run.later(function(){
                d.columns[0][1] = he;
                t.set('data',d);
                console.log('New datapoint added');
            //});
            t.notifyPropertyChange('data');
        },
    }
});
