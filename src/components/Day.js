import React, { Component } from "react";

class Day extends Component{
    constructor() {
        super();
        this.state = {
          date: new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        };
      }

      render(){
          return (
              <h3 className='welcome'>{this.state.date}</h3>
          )
      }
}

export default Day