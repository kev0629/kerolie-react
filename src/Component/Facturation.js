import React from 'react';
import { Input, Checkbox, Button, Form} from 'semantic-ui-react'

import './assets/css/style.css'

function Facturation(){
    return(
        <div className="contener">
            <h1>Facturation</h1>
            <form>
                    <input type="checkbox" />
                    <label for="scales">Devis</label>
                    <input type="checkbox"  />
                    <label for="scales">enfants</label>
                    <input type="checkbox"  />
                    <label for="scales">Organisme</label>
                    <input type="checkbox"  />
                    <label for="scales">Seconde prestation</label>
                    <input type="checkbox"  />
                    <label for="scales">Déplacement</label>
                    <div>
                        <input type="date" id="date" value=""></input>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label for="scales">Patient enregistré</label>
                    </div>
                    <input ></input>
                <input type="submit" value="Facture" />
            </form>
        </div>
        
    )
}

export default Facturation;