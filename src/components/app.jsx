import React, {useState} from "react";
import Header from "./header";
import Form from "./form";
import Footer from "./footer";

function App() {


  return (<div>

    <div class = "container-fluid">

    <div class = "row">

    <div class = "sinistra col-lg-6">

    <Header />

    <Form/>


    </div>



    <div class = "destra col-lg-6" >
    <img src = "images/hero-desktop.jpg" alt = "young-lady" />
    </div>

    </div>



    </div>

    <Footer / >

    </div>
  );
}

export default App;
