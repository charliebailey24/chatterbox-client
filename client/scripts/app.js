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
    //App.fetch(App.stopSpinner);
    // App.startSpinner();
    // App.fetch(App.stopSpinner);


    App.fetch(function () {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
      jquery();
    });



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
    Parse.readAll((data) => { // returns array of messages
      // examine the response from the server request:
      console.log(data);
      // Messages._currentPull = data; // have a global reference to the current fetch
      var cleanData = function(obj) {
        var sanitize = function (str1) {
          return str1.trim().toLowerCase().replace(/((alert|on\w+|function\s+\w+)\s*\(\s*(['+\d\w](,?\s*['+\d\w]*)*)*\s*\))/, '').replace(/\s/g, ' ');
          //((alert|on\w+|function\s+\w+)\s*\(\s*(['+\d\w](,?\s*['+\d\w]*)*)*\s*\))
          ///[^a-zA-Z0-9 -]/
        };

        // clean data here
        // loop through unclean data and change messages to be santizied
        obj.forEach(message => {
          if (message.text) {
            message.text = sanitize(message.text);
          }
        });
        return obj;

      };

      Messages._data = cleanData(data); // remember to change later to currentPull

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // sanatize the data we receive from server


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
  },

  updateState: function() {
    App.startSpinner();
    App.fetch(function () {
      // load messages && update messages
      MessagesView.render();
      // update rooms

      App.stopSpinner();
    });
  }

};
