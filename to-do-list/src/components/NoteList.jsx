import React from "react";
import { Component } from "react";
import { Note } from "./Note";
class NoteList extends Component {
  category_list = ["Work", "Work", "Study"];

  render() {
    return (
      <ul>
        {this.category_list.map((category) => {
          return (
            <li>
              <h1>{category}</h1>
              <Note />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
