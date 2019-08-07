import React from 'react'

export default class CPBad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
      };
    }
  
    componentDidMount() {
      this.setState(() => {
        return {
          name: "赵天龙",
        };
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello! {this.state.name}</h1>
        </div>
      );
    }
  }