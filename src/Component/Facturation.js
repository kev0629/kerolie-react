import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import {Button, Header, Form, Container, Input, Dropdown} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
import './assets/css/style.css'

const invoiceNumP1 = [
  {text: '1', value: '1'},
  {text: '2',value: '2'},
  {text: '3',value: '3'},
  {text: '4',value: '4'},
  {text: '5',value: '5'},
  {text: '6',value: '6'},
  {text: '7',value: '7'},
  {text: '8',value: '8'},
  {text: '9',value: '9'},
  {text: '10',value: '10'},
  {text: '11',value: '11'},
  {text: '12',value: '12'},
]

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
        <Form>
            <Form.Group inline className="checkboxs">
                <Form.Checkbox label='Devis' />
                <Form.Checkbox label='Enfant' />
                <Form.Checkbox label='Organisme' />
                <Form.Checkbox label='2nd prestation' />
                <Form.Checkbox label='Déplacement' />
            </Form.Group>
            <DateInput
            name="date"
            placeholder="Date"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
            />
            <Form.Checkbox toggle label='Personne enregistré' className='centered' />
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Input}
                                    placeholder='nom du patient'
                                    icon='user'
                                    iconPosition='left'
                                />
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Input}
                                    placeholder='Personne à facturer'
                                    icon='user'
                                    iconPosition='left'
                                />
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Input}
                                    placeholder='Adresse'
                                    iconPosition='left'
                                    icon= 'home'
                                />
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    placeholder='Code postal'
                                    iconPosition='left'
                                    icon= 'home'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    placeholder='ville'
                                    iconPosition='left'
                                    icon= 'home'
                                />    
                            </Form.Group>
                            <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    placeholder='Objet'
                            />
                            <Header as='h5' className='centered'>Numero de facture</Header>
                            <Form.Group widths='equal'>
                            <Form.Field
                              control={Dropdown}
                              placeholder='Numéro de facture'
                              fluid
                              selection
                              options={invoiceNumP1}
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                icon='hashtag'
                                placeholder='Numéro de facture'
                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='type de prestation' width={12} />
                                <Form.Input  icon='sort numeric up'   width={4} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='type de prestation' width={12} />
                                <Form.Input icon='sort numeric up'  width={4} />
                            </Form.Group>
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                placeholder='Frais de déplacements'
                                icon='car'
                                iconPosition='left'
                            />
                            <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Facture'
                            icon='file alternate outline'
                            color='blue'
                            className='centered'
                            />
        </Form>
      );
    }
  }

function Facturation(){
    return(                 
            <Container className="contener">
                <InvoiceForm/>           
            </Container>

        
    )
}

export default Facturation;