import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import {Button, Header, Form, Container, Input} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
import './assets/css/style.css'

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
      }
    }
  
    render() {
      return (
        <Form>
            <Form.Group inline >
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
            <Form.Checkbox toggle label='Personne enregistré' />
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
                            <label>Numero de facture</label>
                            <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                value='0'
                                type='number'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                value='0'
                                type='number'
                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='type de prestation' width={12} />
                                <Form.Input value='1'  type='number' width={4} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder='type de prestation' width={12} />
                                <Form.Input value='1'  type='number' width={4} />
                            </Form.Group>
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                placeholder='Frais de déplacements'
                                type='number'
                                icon='car'
                                iconPosition='left'
                            />
                            <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Facture'
                            icon='file alternate outline'
                            color='blue'
                            />
        </Form>
      );
    }
  }

function Facturation(){
    return(                 
            <Container className="contener">
                <Header as='h1' textAlign='center'>
                    Facturation
                </Header>
                <InvoiceForm/>           
            </Container>

        
    )
}

export default Facturation;