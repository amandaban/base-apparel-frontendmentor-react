import React, {useState} from "react";


function Form() {

  const [myEmail, setMyEmail] = useState("");

  function emailHandler(event){       //salvo il valore inserito
    setMyEmail(event.target.value);
  }

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isClicked, setClicked] = useState(false);

  function submitHandler(event){
    event.preventDefault();

    var at = new RegExp("@");         //controllo se nel valore c'è @
    var res = at.test(myEmail);

    setIsEmailValid(res);

    setClicked("true");
  }
  
  

  return(
    <div class = "text">

      <h1 class = "firstline"> WE'RE </h1>
      <h1 class = "secondline" > COMING <br/> SOON </h1>

      <p> 
      Hello fellow shoppers! We're currently building our new <br/>fashion store.
      Add your email below to stay up - to - date with announcements and our launch deals. 
      </p>
    
      <div class = "wrapper">

        <form 
        class = "" 
        action = "index.html" 
        method = "post">

          <input 
          type = "text"
          placeholder = "Email Address"
          value={myEmail}
          onChange={emailHandler}
          name= "email"
          />

          <button
          onClick={submitHandler}
          type = "submit"
          name = "button"
          class={isClicked && "clicked"} >

          <img class= "arrow" src = "images/icon-arrow.svg" />
          </button>

          {isEmailValid
            ? null 
            : <p class= "error">Please provide a valid email</p>}

      




        </form>
      </div>



    </div>
  );
}

export default Form;
