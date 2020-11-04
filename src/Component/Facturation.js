import React from 'react';
import { Input, Checkbox, Button, Form} from 'semantic-ui-react'

import './assets/css/style.css'

function Facturation(){
    return(
      <Form>
        <div className="contener">
            <h1>Facturation</h1>
            <Form.Field>
                <Checkbox label='Devis' />
                <Checkbox label='enfants' />
                <Checkbox label='Organisme' />
                <Checkbox label='Seconde prestation' />
                <Checkbox label='Déplacement' />
            </Form.Field>
            <input type="date" id="date" value=""></input>
            <Form.Field>
              <Checkbox toggle label='Client enregistré' />
            </Form.Field>
            <Form.Field>
              <label>Nom</label>
              <input placeholder='Nom' />
            </Form.Field>
            <Form.Field>
              <label>Adresse</label>
              <input placeholder='Adresse' />
            </Form.Field>
            <Form.Field>
              <Form.Input label='Code postal' placeholder='Code postal' width={2}/>
              <Form.Input label='Ville' placeholder='Ville' width={2}/>
            </Form.Field>
            <Form.Field>
            <Button type='submit'>Submit</Button>
            </Form.Field>`
          </div>
        </Form>
        
    )
}

export default Facturation;