import React from 'react'

function makeToggleable(Clickable) {
    return class extends React.Component {
      constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = { show: false }
      }
  
      toggle() {
        this.setState(prevState => ({ show: !prevState.show }))
      }
  
      render() {
        return (
          <div>
            <Clickable
              {...this.props}
              onClick={this.toggle}
            />
            {this.state.show && this.props.children}
          </div>
        )
      }
    }
 }

class ToggleableMenuItem extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
const ToggleableMenu = makeToggleable(ToggleableMenuItem)
export class HocMenu extends React.Component {
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
