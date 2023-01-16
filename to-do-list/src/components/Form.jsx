

import React, { Component } from "react";

class Form extends Component{

    render(){
        return(
            <form>

            <input type="text" placeholder='Title'/>
          
            <textarea placeholder="Write your note" />
          
            <button>
              Enviar
            </button>
            
           </form>
        )
    }
}

export default Form