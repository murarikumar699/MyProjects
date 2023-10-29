let commentModel = document.getElementById('commentModel');

function openCommentModel(){
    commentModel.classList.remove('d-none');
}

function closeCommentModel(){
    commentModel.classList.add('d-none');
}

let sendChat = document.getElementById('chatImage');
let chatText = document.getElementById('chatText');
let chatList = document.getElementById('chatList');
sendChat.addEventListener('click',function(){
    if(chatText.value === '') return false
    let li = `<div class="chatdivstReply">
                <img class="userImage" src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="">
                <div class="spanDiv">
                    <span style="width: 583px;display: block;">${chatText.value}</span>
                </div>
                <p class="replyButton">Reply</p>
            </div>`
            chatList.innerHTML = chatList.innerHTML + li
            chatText.value = '';
            commentModel.scrollTo({ left: 0, bottom: document.body.scrollHeight, behavior: "smooth" });
    ;
})



function initializeReplyButton(target){
   
    // if(target.nextSibling.innerHTML === undefined){
        console.log("target",target)
        let div = document.createElement('div');
        div.classList.add('comentReplyMainDiv')
        let input = `<input type="text" class='form-control textReply'>
                <div class="mt-3 comentReplyDiv">
                    <p class="cancelReply">Cancel</p>
                    <p class="commentReply">Comment</p>
                </div>` 
        div.innerHTML =   input;
        target.after(div)
        // target.insertAdjacentHTML('afterEnd',div.innerHTML)
    // }
}

document.addEventListener('click', function handleClick(event) {
    console.log('user clicked: ', event.target.classList);
    if(event.target.classList[0] === 'cancelReply'){
        initializeCancelButton(event.target)
    }else if(event.target.classList[0] === 'commentReply'){
        console.log("eventeventeventevent",event.target)
        initializeCommentReplyButton(event.target);
    }else if(event.target.classList[0] === 'replyButton'){
        initializeReplyButton(event.target);
    }
});

function initializeCancelButton(target){
    target.parentNode.parentNode.getElementsByClassName('textReply')[0].remove()
    target.parentNode.remove();
}


function initializeCommentReplyButton(target){
    if(target.parentNode.parentNode.getElementsByClassName('textReply')[0].value.length < 1) return false;
    let parentNode = target.parentNode.parentNode.parentNode.getElementsByClassName('replyButton');
    let div = document.createElement('div');
    console.log("parentNode",target.parentNode.parentNode)
    div.classList.add('chatdivChildReply');
    let ele = `
                <img class="userImage" src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="">
                <div class="spanDivChild">
                    <span style="width: 583px;display: block;">${target.parentNode.parentNode.getElementsByClassName('textReply')[0].value}</span>
                </div>
                <p class="replyButton">Reply</p>
            `    
    
    div.innerHTML =  ele;
    target.parentNode.parentNode.getElementsByClassName('textReply')[0].remove() 
    target.parentNode.remove();
    parentNode[0].after(div);
    commentModel.scrollTo({ left: 0, bottom: document.body.scrollHeight, behavior: "smooth" });
    
}