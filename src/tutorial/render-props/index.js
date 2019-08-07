import React from 'react'

export class WindowWidth extends React.Component {
    state = { width: 0 };
  
    componentDidMount() {
      this.setState(
        { width: window.innerWidth },()=>{
            
            window.addEventListener("resize", ({ target }) =>
            this.setState({ width: target.innerWidth })
          )
        }
      );
    }
  
    render() {
      return this.props.children && this.props.children(this.state.width);
    }
  }
