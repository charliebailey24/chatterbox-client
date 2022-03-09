// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); // jquery 'on' method -- means on submit, we will run handlesubmit method
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let obj = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val()
    };
    Parse.create(obj, App.updateState);

    // message ->      server
    //      here
    //server - >    client its ok to refresh
    //      here

    // var successfullySent = function() {
    //   console.log('chatterbox: user sent, custom cb');
    // };

    // Parse.create();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    /*
      <form action="#" id="send" method="post">
        <input type="text" name="message" id="message"/>
        <input type="submit" name="submit" class="submit"/>
      </form>

      when we press sumbit,
      create the object below
      var message = {
        username: 'shawndrost',
        text: 'trololo',
        roomname: '4chan'
      };
      Parse.create(message)

    whatever is in the box will be applied to variable
    Parse.create(variable)

    */

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};