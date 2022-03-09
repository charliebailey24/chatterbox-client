// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    console.log('Begin initialization');
    // somehow many rest of this function not run until we get necessary informato

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);



    var jquery = function() {
      $('.username').click(function() {
        Friends.toggleStatus(this.id);
      });
    };


    // (() => {
    //   console.log('IIFE is running');
    //   $('.username').click(function() {
    //     Friends.toggleStatus(this.id);
    //   });
    // })();

    // IIFE our onclick methdo

    // cant do this

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

  },

  fetch: function(callback = ()=>{}) {
    // readAll: function(successCB, errorCB = null) {
    Parse.readAll((data) => { // returns array of messages
      // examine the response from the server request:
      Messages._data = data;
      MessagesView.initialize();
      FormView.initialize();
      RoomsView.initialize();
      callback();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  updateState: function() {
    App.startSpinner();
    App.fetch(App.stopSpinner);
  }

};



/*

var array = [1,2,3,4,5]

array.forEach(function(val){
returns num  2 === 0
}) function();

running a loop on the given array


false
true
false
true
false

array.forEach(isEven)


var isEven = function (num) {
  returns num + 2
}

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6

reduce [1, 2, 3]
return memo + num;
memo = 0
2 + 1 = 3
memo = 3
3 + 2 = 5
memo = 5
5 + 3
memo = 8

}



*/