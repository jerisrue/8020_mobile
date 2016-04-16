import Ember from 'ember';

export default Ember.Controller.extend({
	healthy: 5,
	unhealthy: 5,
	actions: {
		incUn: function(){
			var un = this.get('unhealthy');
			this.set('unhealthy', un + 1);
			debugger;
		},
		incHe: function(){
			var he = this.get('healthy');
			this.set('healthy', he + 1);
		},
	}
});
