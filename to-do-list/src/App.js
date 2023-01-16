import "./App.css";
import NoteList from "./components/NoteList";
import Form from "./components/Form";
import { Component } from "react";

class App extends Component {
  render(){
    return (
      <>
        <Form />
  
        <NoteList />
      </>
    );
  }
 
}

export default App;
