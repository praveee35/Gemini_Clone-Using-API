
//script for Gemini Ai

const typingForm = document.querySelector(".typing-form");
const chatList= document.querySelector(".chat-list") ;
const toggleThemeBtn = document.querySelector("#toggleTheme")

let userMessage= null;


 //Api Keys From Google
const API_KEY = "AIzaSyDWUKIMS-je85BS-nrgXENFy9oLrnr0I6Q"
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


//local storage
const loadLocalStorageData = () =>{
    const savedChats = localStorage.getItem("savedChats");
    const isLightMode = (localStorage.getItem("themesOfThePage")==="light_mode");
      
    document.body.chatList.toggle("light_mode",isLightMode);
    toggleThemeBtn.innerText=isLightMode? "dark_mode " : "light_mode";


    chatList.innerHTML = savedChats || "",
    document.body.classList.toggle("hide-header", savedChats);
    chatList.scrollTo(0, chatList.scrollHeight);
}
//loadLocalStorageData()



const createMessageElement = (content,className)=>{
      const div = document.createElement("div");
      div.classList.add("message-outgoing",className)
      div.innerHTML = content;
      return div;
}



//typing Effect
// const showTypingEffect = (text,textElement) =>{
//     const words = text.split(' ');
//     let currentWordIndex = 0;

//     const typingInterval = setInterval(()=>{
//      //append each word to the text element to the space
//    textElement.innerHTML += (currentWordIndex === 0 ? ' ' : ' ') + words[currentWordIndex ++];
   
//     if(currentWordIndex === words.length){
//         clearInterval(typingInterval);
//     }
//     },75)
//  }


   //Fetch repsonse from the API based on user message

   const generateAPIRepsonse = async(incomingMessageDiv) =>{
     //show data from data to display

     const textElement = incomingMessageDiv.querySelector(".text")
    
    //send post request to API

    try{

        const response = await fetch (API_URL,{
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify ({
                contents : [{
                    role : "user",
                    parts : [{text : userMessage }]
                }]
            })

        });

        const data  = await response.json();
        if(!response.ok) throw new Error(data.error.message)
      
        // Api Response
        const apiRepsonse = data?.candidates[0].content.parts[0].text;
        
        //showTypingEffect(apiRepsonse,textElement)

        const typingInterval = setInterval (()=>{
       
            textElement.innerHTML = apiRepsonse;
            clearInterval(typingInterval);
        },10)
             
        
               //console.log(apiRepsonse)

    }catch(error){
       textElement.innerText = error.message;
       textElement.classList.add('error');
    }finally{
        incomingMessageDiv.classList.remove("loading-indicator");
    }
   }
//show a loading animation  while ai will written
 const showLoadingAnimation = () =>{
    const html  = `
                    
    <div class="message-content">
    <img src="gemini.svg" alt="Gemini Image" class="avatar">
          
       <p class = "text"></p>
          
           <div class="loading-indicator">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
           </div>
           </div>
           `


     const incomingMessageDiv = createMessageElement(html,"loading-indicator");
     incomingMessageDiv.querySelector(".text").innerHTML =userMessage;
       chatList.appendChild(incomingMessageDiv);
 
//calling Free API response from Google
     generateAPIRepsonse(incomingMessageDiv);
 
 }

//outgoing message
const   handleOutGoingChat = ()=>{
userMessage = document.querySelector(".typing-input").value.trim();
if(!userMessage) return;

  const html  = `
   <div class="messages-incoming" >
  <div class="message-content" >
   <img src="user.jpg" alt="User Image" class="avatar">
 <p class="text">+</p>
    </div>
    </div>`
    const outGoingMessageDiv = createMessageElement(html,);
    outGoingMessageDiv.querySelector(".text").innerHTML =userMessage;
    chatList.appendChild(outGoingMessageDiv);


    typingForm.reset()
    chatList.scrollTo(0, chatList.scrollHeight);
    document.body.classList.add("hide-header")//hide the suggestions when chat start
    setTimeout(showLoadingAnimation,500)
};

toggleThemeBtn.addEventListener('click',()=>{
   const isLightMode =  document.body.classList.toggle("light_mode");
   localStorage.setItem("themesOfThePage" , isLightMode ? 'light_mode' : "dark_mode" )
   toggleThemeBtn.innerText = isLightMode ? 'dark_mode' : "light_mode"; 
})



typingForm.addEventListener("submit",(e)=>{
    e.preventDefault();


    handleOutGoingChat();
});

