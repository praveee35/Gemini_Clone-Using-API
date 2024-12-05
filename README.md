# Gemini_Clone-Using-API
Gemini Clone Using HTML,CSS &amp; JAVA SCRIPT..Integrated With Google "GEMINI API "
Gemini Clone 🌌
This is a Gemini Clone web application built with HTML, CSS, and JavaScript, leveraging the Google Gemini API for AI-powered features. The project aims to replicate the functionality and design of Google's Gemini platform while focusing on responsiveness and user experience.

🚀 Features
Interactive Design: A user-friendly interface with responsive layouts.
AI-Powered Queries: Integration with Google Gemini API to provide intelligent insights.
Dynamic Updates: Real-time data fetching and rendering using JavaScript.
Cross-Browser Compatibility: Works seamlessly on modern browsers.
🛠️ Technologies Used
Frontend:

HTML5
CSS3 (with Flexbox and Grid for layout)
JavaScript (ES6+ for interactivity)
API Integration:

Google Gemini API

CODE AVAILABLE HERE

1.HTML --

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gemini Clone</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=send" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=emoji_objects,send" />
    <link rel="stylesheet" href="./home.css">
</head>
<body>

    <!--header Greatings-->
    <header class="header">
   <h2 class="tittle">Hello, There</h2>
   <h4 class="sub-tittle">How Can I Help You ?</h4>
  
</header>
   
<div class="chat-list">
   <!-- <div class="message-outgoing">  -->
   <!--<div class="message-content">
   <img src="user.jpg" alt="User Image" class="avatar">
   <p class="text">Lorem ipsum,dolor sit amet consecutor adipisicing elit.Eum dolorem</p>
    </div>--> 

  <!-- <div class="messages-incoming" loading>
        <div class="message-content loading">
       <img src="gemini.svg" alt="Gemini Image" class="avatar">
       
        </div>
        

           </div>
           <div class="message-incoming">
            <div class="message-content">
           <img src="gemini.svg" alt="Gemini Image" class="avatar">
          
             
           <div class="loading-indicator">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
           </div>




            </div>
               </div>
             </div>
           </div> -->


    <!---Starting Page Sugestions-->
    <ul class="sugestions">
        <li class="suggest">
            <h4 class="text">Top 10News In India Wise and State Wise Mainly First Telangana And AndhraPradesh</h4>
            <span class="icon material-symbols-outlined">
                emoji_objects
                </span>
        </li>

         <li class="suggest">
           <h4 class="text">Top IT Releated News In India Last 24Hours</h4>
           <span class="icon material-symbols-outlined">
            emoji_objects
            </span>
        </li>

        <li class="suggest">
           <h4 class="text">How Engineering Colleges are Behave With Students In Telangana And Andhra Pradesh</h4>
           <span class="icon material-symbols-outlined">
            emoji_objects
            </span>
        </li>

        <li class="suggest">
            <h4 class="text">Best AI Techinches For Improve Ourself in Digital Marketing</h4>
            <span class=" icon material-symbols-outlined">
                emoji_objects
                </span>
         </li>

    </ul>

   <!--Typing Area--->

   <div class="typing-area">
     <form action="#" class="typing-form">
        <div class="input-wrapper">     
 <input type="text" placeholder="Enter Prompt Here" class="typing-input" required>

 <button class="btn"><span class="icon material-symbols-outlined">
                send
            </span></button>  
        </div>
       <div class="action-buttons">
         <span id="toggleTheme" class="material-symbol-outlined"><img src="./light_mode_16dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png" width="45"></span>
         <span class="material-symbol-outlined"><img src="./delete_20dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"width="45"></span>
       </div>
    </form>
    <p class="disclaimer-text">
        Gemini AI is Display Inacccurate Info.!Please Check,Once its Responses..Happpy Today....!
        --- Project Done By - Praveen
    </p>
   </div>

 <script src="./gemini.js">

 </script>
</body>
</html>

2. CSS
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/*------body csss----*/

*{
    margin: 0;
    padding: 0;
   box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
:root{
    /*dark color*/
    --text-color:#E3E3E3;
    --subheading-color:#828282;
    --placeholder-color:#A6A6A6;
    --primary-color :#242424;
    --secondary-color : #383838;
    --secondary-hover-color:#444;
}

.light_mode{
    /*light-colors*/
    --text-color:#222;
    --subheading-color:#A0A0A0;
    --placeholder-color:#6C6C6C;
    --primary-color :#FFF;
    --secondary-color : #E9EEF6;
    --secondary-hover-color:#DBE1EA;
}
/* toggle switch css */
body{
    background: var(--primary-color);
}
.header,.typing-area,h4,span{
    color: var(--text-color);
}
.typing-input,button,span{
    background: var(--secondary-color);
  

}
.header, .chat-list .messgae,.typing-form{
    max-width: 1000px;
    margin: 0 auto;
   
}
.header{
   margin-top: 8vh;
    padding: 2rem;
   
}
body.hide-header .header {
 display: none;
 margin-top: 0;
}
body.hide-header .sugestions{
    display: none;
    margin-top: 0;
}


.header :where(.tittle,.sub-tittle){
    font-weight: 500;
    line-height: 3.5rem;
  
}
.header,title{
    margin-inline-start: 550px;
    font-size: 2.2rem;
    width: fit-content;
    background-clip:text;
    background: linear-gradient(to  right,#4285f4,#d96570);
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;

}
.sub-tittle{
    font-size: 1.9rem;
    background:var(#4285f4) ;
   
}


.sugestions{
    margin-top:9.5vh ;
    list-style: none;
  display: flex;
    justify-content: center;
    gap: 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
}
.sugestions .suggest{
    background: var(--secondary-color);
    border-radius:0.75rem ;
    flex-shrink: 0;
   display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 225px;
    padding: 1.5rem;
    font-size: 1rem;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
}
.sugestions .suggest :hover{
    background: var(--secondary-hover-color);
 }


.sugestions .suggest{
    font-weight: 400;

}
.sugestions .suggest span{
    margin-top: 2.5rem;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    border-radius: 50%;
    font-size: 1.5rem;
}
.chat-list{
    padding: 2rem 1rem 12rem;
   max-height: 100vh;
   overflow-y: auto;
}

.chat-list.message-incoming{
    margin-top: .5rem;
    
}
.message-content{
    color:var(--text-color);
    display: flex;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    margin-top: .5rem;
}
.avatar{
    width:40px ;
    margin-top: .5rem;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    align-items: flex-start;
}
.chat-list .messgae .text{
    color: var(--text-color);
}
.chat-list .messgae .text.error{
    color: #e55865;
}
.message-incoming.avatar{
    animation: rotate 3s linear infinite;
}
@keyframes rotate {
    100%{
        transform: rotate(360deg);
    }
}

.message-incoming .text{
    display: none;
}

.chat-list .loading-indicator .loading-bar{
   height: 11px;
   width: 100%;
   border-radius: 0.14rem;
   background: linear-gradient(to right,#4285f4,var(--primary-color),#4285f4);
   animation: animate 3s linear infinite;
}
@keyframes animate {
  0%{
    background-position: -800px 0;
  } 
  100%{
    background-position: 800px 0;
  } 
}

.chat-list .loading-indicator .loading-bar:last-child{
    width:85%;
}
.chat-list .loading-indicator{
    display:none;
    width: 100%;
    gap: 0.8rem;
    flex-direction:column;
}




.typing-area{
    position: fixed;
    width: 100%;
    bottom: 0;
}

.typing-area :where(.typing-form,.action-buttons){
    display: flex;
    gap: 0.75rem;
}
.typing-area .input-wrapper{
    height: 56px;
    width: 100%;
    display: flex;
    position:relative;
    

}
.typing-area .typing-input{
   height: 100%;
   width: 100%; 
   border: none;
   outline: none;
   border-radius: 6.2rem;
   color: var(--text-color);
   padding: 1.1rem 4rem 1.1rem 1.5rem;
    font-size: 1rem;
   background: var(--secondary-color);   
}
.typing-area .typing-input{
    color: var(--placeholder-color);
}
.typing-area .typing-input{
    background: var(--secondary-color);
}
.typing-area.input-wrapper,button{
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background: var(--secondary-color);
}
.typing-area.action-buttons,img{
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background: var(--secondary-color);

}
.typing-area,button:hover{
    background: var(--primary-color)!important;
}

.typing-area.input-wrapper,button{
    position: absolute;
    right: 0;
    outline: none;
    border: none;
    background:none;
    color: var(--text-color);
   
}


.action-buttons span{
     border-radius: 50%
}
.action-buttons span:hover{
    background: var(--secondary-hover-color)!important;
}
.disclaimer-text{
    font-size: 0.85rem;
    margin-top: 1rem;
    font-weight: 400;
    display:flex;
    align-items: center;
    justify-content: center;
     background: var(--primary-color);
     color: var(--subheading-color);
}

@media (max-width : 768px){
    .header  :is(.tittle , .sub-tittle,.sugestions){
        font-size: 2rem;
        line-height: 2.6rem;
    }
}

3. JAVASCRIPT

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

