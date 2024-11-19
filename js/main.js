var arrayOfQoutes = [
   `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br>
<div class="m-4">― Bernard M. Baruch</div>`,

`“You only live once, but if you do it right, once is enough.”<br>
<div class="m-4">― Mae West</div>`,

`“Be the change that you wish to see in the world.”<br>
<div class="m-4">― Mahatma Gandhi</div>`,

`“In three words I can sum up everything I've learned about life: it goes on.”<br>
<div class="m-4">― Robert Frost</div>`,

`“If you tell the truth, you don't have to remember anything.”<br>
<div class="m-4">― Mark Twain</div>`,

`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”<br>
<div class="m-4">― Maya Angelou</div>`,

`“A friend is someone who knows all about you and still loves you.”<br>
<div class="m-4">― Elbert Hubbard</div>`,

`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”<br>
<div class="m-4">― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches</div>`,

`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”<br>
<div class="m-4">― Ralph Waldo Emerson</div>`

];

var updated = "";

function getQoute(){
  var random = Math.floor(Math.random() * arrayOfQoutes.length);
  var qoute = arrayOfQoutes[random];

  if(qoute == updated){
    
    while(qoute == updated){
        var random = Math.floor(Math.random() * arrayOfQoutes.length);
        var qoute = arrayOfQoutes[random];
    }
    
    updated = qoute;
  }

  else{
    updated = qoute;
  }
  document.getElementById("qoute").innerHTML= qoute;
}