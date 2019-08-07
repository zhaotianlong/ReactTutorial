import React from 'react'

 function ppHoc(WrappedComponent) {
      return class extends React.Component {
    state = {
        sex:'男',
        age:'27',
        name:'ztl'    
    }
    render(){

        return ( <div>
            <div>性别：{this.state.sex && this.state.sex}</div>
            <WrappedComponent {...this.state} />
        </div>)
    }
}
}

 const iiHoc = WrappedComponent => class extends WrappedComponent {

    state = {
        renderFather:true,
        name:'父组件'  
    }
    handleClick = () =>{
        this.setState((preState,props)=>({
            renderFather:!preState.renderFather
          }))
    }
    
    render(){
        return <div>
            <button onClick={this.handleClick} >切换渲染 </button>
            {   
                this.state.renderFather ? super.render() : <div>子组件</div>
            }

        </div>
    }
}

 class Element extends React.Component {
    render(){
        return <div>
            {this.props.name && <div> name: {this.props.name}</div>}
            {this.props.age && <div> age: {this.props.age}</div>}
            {this.state && this.state.name && <div> state name: {this.state.name}</div>}
        </div>
    }
}

export const PPHocCom = ppHoc(Element)
export const IIHocCom = iiHoc(Element)