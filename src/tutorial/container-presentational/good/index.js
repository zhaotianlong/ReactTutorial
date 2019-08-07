import React from 'react'
import { GreetingCard } from './components/greeting-card';

export default class CPGood extends React.Component {
    state = {
        name: "",
    };
  
    componentDidMount() {

      this.setState({
          name:'赵天龙'
      })
    }

  
    render() {
      return <GreetingCard {...this.state} />
    }
  }