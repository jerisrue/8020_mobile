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

      alert("ffstga");

        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 40],
                    ['data2', 60]
                ],
                type: 'pie',
                labels: false
            },
            legend: {
                hide: true
            }
        });



      /*this.$('.calendar').fullCalendar( {
        header: {
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        //defaultDate: '2015-10-12',
        editable: false,
        eventLimit: true, // allow "more" link when too many events

        /* jshint ignore:start 
        eventClick: function(calEvent, jsEvent, view) {

          $('.modal-title').text(calEvent.title);
          $('#modalStartTime').text('Start Time: ' + moment(calEvent.start).format("h:mm A"));
          $('#modalDescription').text(calEvent.description);
          $('#myModal').modal('show');
        },
        /* jshint ignore:end 
        eventRender: function(event, element) {
          element.css("font-size","1.1em");
          //element.css("word-wrap","normal");

        },

      });*/
    });
  }
});