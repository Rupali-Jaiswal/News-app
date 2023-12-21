import React, { Component } from 'react'
import loading from './loading.gif'
export class Loading extends Component {
  static propTypes = {}

  render() {
    return (
      <div style={{display:'flex', justifyContent:'center'}}><img src={loading} alt="" /></div>
    )
  }
}

export default Loading