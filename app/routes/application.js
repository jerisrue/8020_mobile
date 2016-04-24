import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	beforeModel: function(transition){
		this.baseUrlRedirect(transition);
		//this.authCheck(transition);
		//will have other stuff here once its connected to restapi
	},
	baseUrlRedirect: function(transition){
		var t = this;
		if(transition.targetName === 'index'){
				t.set('currentTransition', transition);
				transition.abort();
				t.transitionTo('home');
			}
	},
	model: function(){
		return this.store.findAll('pie');
	},
	actions: {
		willTransition: function(transition){
			this.baseUrlRedirect(transition);
			//this.authCheck(transition);
		}
	}
});

