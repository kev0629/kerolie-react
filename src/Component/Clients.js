import React from 'react';
import './assets/css/style.css'

import {Table, Form, Icon} from 'semantic-ui-react'
function Clients(){
    return(
        <div className="contener">
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid placeholder='Personne à factuer' />
                    <Form.Input fluid placeholder='Patient' />
                </Form.Group>
                <Form.Input fluid placeholder='Adresse' />
                <Form.Group widths='equal'>
                <Form.Input fluid placeholder='Code postal' width={8} />
                    <Form.Input fluid placeholder='Ville' width={9}/>
                    <Form.Button width={3}>Add</Form.Button>
                </Form.Group>
            </Form>
            <Table singleLine color='blue' key='blue'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Prestation</Table.HeaderCell>
                    <Table.HeaderCell>Prix</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>Séance cabinet</Table.Cell>
                    <Table.Cell>45 €</Table.Cell>
                    <Table.Cell><Icon color='blue'   name='pencil'/></Table.Cell>
                    <Table.Cell><Icon color='blue'   name='trash'/></Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Séance domicile</Table.Cell>
                    <Table.Cell>55 €</Table.Cell>
                    <Table.Cell><Icon color='blue'   name='pencil'/></Table.Cell>
                    <Table.Cell><Icon color='blue'   name='trash'/></Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Bilan</Table.Cell>
                    <Table.Cell>180 €</Table.Cell>
                    <Table.Cell><Icon color='blue'   name='pencil'/></Table.Cell>
                    <Table.Cell><Icon color='blue'   name='trash'/></Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Clients;