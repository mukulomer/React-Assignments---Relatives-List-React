import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.Relatives = [
      "Shubham",
      "Adarsh",
      "Rishiraj",
      "Omprakash",
      "Khushabu",
      "Shreya"
    ];
  }

  render() {
    return (
      <div id="main">
        <div>
          <ol key="relativeList">
            {this.Relatives.map((relative, index) => (
              <li key={`relativeListItem${index + 1}`}>{relative}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
