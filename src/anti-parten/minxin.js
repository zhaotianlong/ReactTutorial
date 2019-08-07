//B组件
import React from 'react'
import ReactDOM from 'react-dom'

const MouseMixin = {
  getInitialState() {
    return { x: 0, y: 0 }
  },

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
}

const App = React.createClass({
  // Use the mixin!
  mixins: [ MouseMixin ],
  
  render() {
    const { x, y } = this.state

    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>The mouse position is ({x}, {y})</h1>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'))