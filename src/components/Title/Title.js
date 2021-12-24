import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "This is dummy text",
      isInput: false,
    };
  }

  editHandler(){
    this.setState({
      ...this.state,
      isInput: true
    })
  }

  inputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    })
  }

  keyPressHandler(event){
    if(event.key === 'Enter')
    {
      this.setState({
        ...this.state,
        isInput : false
      })
    }
  }

  blurHandler(event){
    this.setState({
      ...this.state,
      isInput : false
    })
  }

  render() {
    let output = null;

    if (this.state.isInput) {
      output = (
        <div>
          <input 
          type="text" 
          className="form-control title" 
          value ={this.state.title}
          onChange={event => this.inputChange(event)}
          onKeyPress={event => this.keyPressHandler(event)}
          onBlur={event => this.blurHandler(event)}
          />
        </div>
      )

    } else {
      output = (
        <div className="d-flex title">
          <h1 className="display-4"> {this.state.title} </h1>
          <span
            className="edit-icon m-auto" onClick = { () => this.editHandler()} >
            <i className="fas fa-pencil-alt"></i>
          </span>
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default Title;
