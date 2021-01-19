import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'pretty-checkbox/src/pretty-checkbox.scss'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
import './assets/css/style.css'

// const invoiceNumP1 = [
//   {text: '1', value: '1'},
//   {text: '2',value: '2'},
//   {text: '3',value: '3'},
//   {text: '4',value: '4'},
//   {text: '5',value: '5'},
//   {text: '6',value: '6'},
//   {text: '7',value: '7'},
//   {text: '8',value: '8'},
//   {text: '9',value: '9'},
//   {text: '10',value: '10'},
//   {text: '11',value: '11'},
//   {text: '12',value: '12'},
// ]

const invoiceNumP1 =[]
for (let i = 0; i < 13; i++) {
  invoiceNumP1[i] = {text:i, value:i}
}

const invoiceNumP2 =[]
for (let i = 0; i < 100; i++) {
  invoiceNumP2[i] = {text:i, value:i}
}

const nbPresta =[]
for (let i = 0; i < 100; i++) {
  nbPresta[i] = {text:i, value:i}
}

class Checkbox extends React.Component{
  render(){
    return(
      <div className="pretty p-pulse p-default p-curve">
        <input type="checkbox" name="Devis" id="Devis"/>
        <div className="state p-primary">
            <label>Devis</label>
        </div>
      </div>
    )
  }
}

class InvoiceForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }
  
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        console.log(value)
      }
    }
  
  
    render() {
      return (
        <>
        <div className='checkbox-block'>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
          <Checkbox/>
        </div>
        <input type="date" id="date" value=""></input>
      </>
      );
    }
  }

function Facturation(){
    return(                 
            <div className="contener">
                <InvoiceForm/>           
            </div>

        
    )
}

export default Facturation;