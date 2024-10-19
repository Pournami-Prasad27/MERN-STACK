import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props)
        this.state={
            items:['apple','ornage']
        };
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.items.map((item,index)=>(<li key={index}>{item}</li>))

            }
        </ul>
        
      </div>
    )
  }
}
