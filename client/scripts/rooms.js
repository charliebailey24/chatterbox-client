// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  /*
  { dreambeans: ___
  }
  */

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  updateRooms: function () {
    // iterate through messages array  Messages._data.roomname <-
    // if key does not exist in obj
    // declare
    // increment
    console.log('updateRooms is triggering');

    Messages._data.forEach(message => {
      if (Rooms._data[message.roomname] === undefined) {
        Rooms._data[message.roomname] = 1;
      } else {
        Rooms._data[message.roomname]++;
      }
    });
    for (var room in Rooms._data) {
      $('#rooms select').append(`<option value="${room}">${room}</option>`);
    }
  },


};