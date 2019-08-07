import React from 'react'

class Toggleable extends React.Component {
    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.state = { show: false }
    }
  
    toggle() {
      this.setState(prevState => ({ show: !prevState.show }))
    }
  
    render() {
      return this.props.children(this.state.show, this.toggle)
    }
  }
  
  const ToggleableMenu = props =>
    <Toggleable>
      {(show, onClick) => (
        <div>
          <div onClick={onClick}>
            <h1>{props.title}</h1>
          </div>
          {show && props.children}
        </div>
      )}
    </Toggleable>
  
  export class RenderPropMenu extends React.Component {
    render() {
      return (
        <div>
          <ToggleableMenu title="First Menu">
            <p>Some content</p>
          </ToggleableMenu>
          <ToggleableMenu title="Second Menu">
            <p>Another content</p>
          </ToggleableMenu>
          <ToggleableMenu title="Third Menu">
            <p>More content</p>
          </ToggleableMenu>
        </div>
      )
    }
  }
  