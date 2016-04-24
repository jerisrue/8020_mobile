import DS from 'ember-data';

export default DS.Model.extend({
	healthy: DS.attr('number'),
	unhealthy: DS.attr('number'),
});
