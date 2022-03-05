// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    console.log(this);
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // - Messages._data (array of messages)
    // put all rendered messages into id='chats'
    Messages._data.forEach(message => {
      if (message.username === null) {
        message.username = 'unknown';
      }
      // console.log(message);
      $('#chats').append(MessageView.render(message));
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    $('#chats').html(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};