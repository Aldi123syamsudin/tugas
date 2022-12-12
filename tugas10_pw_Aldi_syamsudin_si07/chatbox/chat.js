const chatbody = document.querySelector(".chat_body");
const txtinput = document.querySelector("#txtinput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtinput.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13){
        renderUserMessage();
    }
})
const renderUserMessage = () =>{
    const userinput = txtinput.value;
    renderMessageEle(userinput);
    txtinput.value = "";
};

const renderMessageEle=(txt) =>{
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add("user-message");
    messageEle.append(txtNode);
    chatbody.append(messageEle)
}