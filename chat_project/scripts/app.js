// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('update-mssg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatRoom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();

    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatRoom.updateName(newName);

    // reset the form
    newNameForm.reset();

    // show then hide the update message
    updateMssg.innerHTML = `Your name was upated to ${newName}`;
    setTimeout(() => 
        updateMssg.innerText = ''
    , 3000);
});

// update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatRoom.updateRoom(e.target.getAttribute('id'));
        chatRoom.getChats(data => chatUI.render(data));
    }
})

// check local storage for a name
const username = localStorage.getItem('username') ? localStorage.getItem('username') : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', username);

// get chats and render
chatRoom.getChats(data => chatUI.render(data));

