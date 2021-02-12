import React from 'react';
import 'pretty-checkbox/src/pretty-checkbox.scss'


class Checkbox extends React.Component{
    render(){
      return(
        <div className="pretty p-pulse p-default p-curve">
          <input type="checkbox"  name={this.props.name} id={this.props.name} checked={this.props.checked} onChange={this.props.onChange}/>
          <div className="state p-primary">
              <label>{this.props.label}</label>
          </div>
        </div>
      )
    }
  }
  
  class BlueSwitch extends React.Component{
    render(){
      return(
        <div className="pretty p-switch p-fill">
          <input type="checkbox"  name={this.props.name} id={this.props.name} checked={this.props.checked} onChange={this.props.onChange}/>
          <div className="state p-primary">
              <label>{this.props.children}</label>
          </div>
        </div>
      )
    }
  }
  
  class RedSwitch extends React.Component{
    render(){
      return(
        <div className="pretty p-switch p-fill">
          <input type="checkbox"  name={this.props.name} id={this.props.name} checked={this.props.checked} onChange={this.props.onChange}/>
          <div className="state p-danger">
              <label>{this.props.children}</label>
          </div>
        </div>
      )
    }
  }

  export default {RedSwitch, BlueSwitch, Checkbox}