// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'), // https://api.jquery.com/change/

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    console.log('Initialization: Rooms loaded!');
  },

  render: function() {
    Rooms.updateRooms();
    // TODO: Render out the list of rooms.
    for (var room in Rooms._data) {
      $('#rooms select').append(`<option value="${room}">${room}</option>`);
    }
  },

  renderRoom: function(roomname) {
    if (Rooms._data[roomname] === undefined) {
      Rooms._data[roomname] = 1;
    } else {
      Rooms._data[roomname]++;
    }
    $('#rooms select').append(`<option value="${roomname}">${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};


