// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username" id="<%= username %>"><%= username %></div>
        <div class="message"><%= text %></div>
        <div></div>
      </div>
    `)

};

// [
// {
//   "message_id": 52977,
//   "roomname": null,
//   "text": null,
//   "username": "anonymous",
//   "github_handle": "genewongs",
//   "campus": "rfp",
//   "created_at": "2022-03-04T23:11:01.825Z",
//   "updated_at": "2022-03-04T23:11:01.825Z"
// },

// $('#chats').html(MessageView.render(messageArray[1]))