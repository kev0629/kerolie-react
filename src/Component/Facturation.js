import React from 'react';

import './assets/css/style.css'

function Facturation(){
    return(
        <div className="contener">
            <h1>Facturation</h1>
            <div>
                <input type="checkbox"  checked/>
                <label for="scales">Devis</label>
                <input type="checkbox"  checked/>
                <label for="scales">enfants</label>
                <input type="checkbox"  checked/>
                <label for="scales">Organisme</label>
                <input type="checkbox"  checked/>
                <label for="scales">Seconde prestation</label>
                <input type="checkbox"  checked/>
                <label for="scales">Déplacement</label>
            </div>
            <div>
                <input type="date" id="date" value=""></input>
            </div>
            <div>
                <input type="checkbox"  checked/>
                <label for="scales">Patient enregistré</label>  
            </div>
           
        </div>
        
    )
}

export default Facturation;