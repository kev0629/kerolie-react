import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Input, Checkbox, Button, Form, Container, Grid} from 'semantic-ui-react'
import DatePicker from 'react-date-picker'
import './assets/css/style.css'

function Facturation(){
    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
    return(
        <div className="contener">
            <Container>
                <h1>Facturation</h1>
                <Grid centered>
                    <Form>
                    <Form.Group>
                        <Form.Input placeholder='Personne à facturer'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input placeholder='Personne à facturer'/>
                    </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group inline>
                            <Form.Checkbox label='Devis' />
                            <Form.Checkbox label='Enfant' />
                            <Form.Checkbox label='Organisme' />
                            <Form.Checkbox label='Seconde prestation' />
                            <Form.Checkbox label='Déplacement' />
                        </Form.Group>
                        <Form.Group>    
                            <SemanticDatepicker onChange={onChange} />
                        </Form.Group>
                        <Form.Checkbox label='Personne enregistré' />
                        <Form.Group>
                            <Form.Input placeholder='Personne à facturer' width={7}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Patient' width={7}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Adresse' width={14}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Input placeholder='Code postal' width={4}/>
                            <Form.Input placeholder='Ville'width={10}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Objet de la facture' width={14}/>
                        </Form.Group>
                        <label>Numero de facture</label>
                        <Form.Group>
                            <Form.Input width={7}/>
                            <Form.Input  width={7}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Type de prestation' width={7}/>
                            <Form.Input width={7}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Type de prestation' width={7}/>
                            <Form.Input width={7}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input placeholder='Frais de déplacements' width={14} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Checkbox label='Facture Acquitée' />
                        </Form.Group>
                            <Button type='submit'>Submit</Button>
                    </Form>
                </Grid>
            </Container>
        </div>
        
    )
}

export default Facturation;