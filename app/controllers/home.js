import Ember from 'ember';

export default Ember.Controller.extend({
    healthy: 8,
    unhealthy: 2,
    //controllerObj: null,
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
        /*onclick: function (d, i) {
            if (d.id == 'unhealthy') {
                contObj.send("incUn");
            }
            console.log("onclick", d, i); },*/
        onresized: function () {
            //chart.destroy()
            alert('resized');
            chart.resize({
                height: Ember.$(window).height()*0.4,
            });
        }
    },
    size: {
        height: Ember.$(window).height()*0.4
    },
    legend: {
        hide: true
    },
    tooltip: {
        show: false
    },
    /*onresized: function () {
        //chart.destroy()
        chart.resize({
            height: Ember.$(window).height()*0.4,
        });
    },*/
    init: function() {
        //debugger;

        this._super.apply(this, arguments);
        var self = this;
        this.set('controllerObj', this);

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
    actions: {
        incUn: function(){
            //debugger;
            var t = this;
            var un = t.get('unhealthy');
            t.set('unhealthy', un + 1);
            //console.log(t.get('data'));
            var d = t.get('data');
            d.columns[1][1] = un + 1;
            t.set('data',d);
            //console.log('New datapoint added');
            this.notifyPropertyChange('data');
        },
        incHe: function(){
            var t = this;
            var he = t.get('healthy');
            t.set('healthy', he + 1);
            //console.log(t.get('data'));
            var d = t.get('data');
            d.columns[0][1] = he + 1;
            t.set('data',d);
            //console.log('New datapoint added');
            t.notifyPropertyChange('data');
        },
    }
});
