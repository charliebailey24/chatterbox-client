// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  toggleStatus: function(user) {
    if (Friends._data[user] === undefined) {
      Friends._data[user] = true;
    } else {
      Friends._data[user] = !Friends._data[user];
    }
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  // when their id div is clicked
  /*we would access their id = $(username).attr("id")

  $( "#target" ).click(
    var user = $(username).attr("id")
    this.toggleStatus(user)

  */
};

// FormView.$form.on('submit', FormView.handleSubmit);

// get id of whatever we're clicked
// $( ".username" ).on( "click", function(event) {
//   console.log('$( ".username" ).attr("id"):', $( ".username" ).attr("id"));
//   Friends.toggleStatus($( ".username" ).attr("id"));
//   // let user = $(`#${id}`).attr("id");
//   // Friends.toggleStatus(user);
// });


//addEventListener, click, function()
//
//