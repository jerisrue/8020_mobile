import Ember from 'ember';

export default Ember.Controller.extend({
	healthy: null,
	unhealthy: null,
	init: function() {
        //debugger;

        this._super.apply(this, arguments);
        var pie = store.createRecord('pie',{
            healthy : 2,
            unhealthy : 3,
        });
        pie.save();
    },
	
});
