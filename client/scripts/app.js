// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    console.log('ran when page loaded');
    // somehow many rest of this function not run until we get necessary informato

    // Fetch initial batch of messages
    App.startSpinner();
    //App.fetch(App.stopSpinner);
    App.fetch(function () {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });


    // cant do this

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => { // returns array of messages
      // examine the response from the server request:
      console.log(data);
      // Messages._currentPull = data; // have a global reference to the current fetch
      Messages._data = data; // remember to change later to currentPull

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // input: data received using the Parse class readAll method
      // output:
      callback();
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
