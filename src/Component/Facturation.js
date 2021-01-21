import React from 'react';
import 'pretty-checkbox/src/pretty-checkbox.scss'
import './assets/css/style.css'

var PrestationList= [{
  "prestation": "Bilan d'ergothérapie",
  "price": 180,
  "id":0,
}, {
  "prestation": "Séance d'ergothérapie à domicile",
  "price": 55,
  "id":1,
}, {
  "prestation": "Séance d'ergothérapie en cabinet",
  "price": 45,
  "id":2,
}]

var Patientlist = [{
  "parentsName": "Sidi Atman",
  "childFirstName": "Anthony",
  "adress": "3438 boulevard des Horizons",
  "postCode": "06220",
  "city": "VALLAURIS",
  "id":0,
}, {
  "parentsName": "Barelier",
  "childFirstName": "Paolo",
  "adress": "",
  "postCode": "",
  "city": "",
  "id":1,
}, {
  "parentsName": "Cauneau",
  "childFirstName": "Gaspar",
  "adress": "",
  "postCode": "06220",
  "city": "GOLFE JUAN",
  "id":2,
}, {
  "parentsName": "De Soria",
  "childFirstName": "Enzo",
  "adress": "Villa Montolivet 28 avenue Jean Mermoz",
  "postCode": "06110",
  "city": "LE CANNET",
  "id":3,
}]

const prestations = PrestationList.map((PrestationList) =>
  <option key={PrestationList.id}>{PrestationList.prestation}</option>
);

const patientSelect = Patientlist.map((Patientlist) =>
<option key={Patientlist.id} id={Patientlist.id} value={Patientlist.parentsName} >{Patientlist.parentsName}</option>
);
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

class Switch extends React.Component{
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


class InvoiceForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
      quot:false,
      org:false,
      child:false,
      isPresta2:false,
      mouv:false,
      registred:false,
      billName:'',
      childName:'',
      adress:'',
      postcode:'',
      city:'',
      object:'',
      invoiceN1:0,
      invoiceN2:0,
      presta1:"",
      nbPresta1:0,
      presta2:"",
      nbPresta2:0,
      mouvePrice:'',

      };
      this.handleChange = this.handleChange.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
      const name = event.target.name
      this.setState({[name]:event.target.value})
    }
    handleCheck = (event) => {
      const name = event.target.name
      this.setState({[name]:event.target.checked})
    }
    handleSelectedPatient = (event)=>{
      
      console.log(event)
      // this.setState({billname:Patientlist[id].parentsName})
      // this.setState({childName:Patientlist[id].childFirstName})
      // this.setState({adress:Patientlist[id].adress})
      // this.setState({postCode:Patientlist[id].postCode})
      // this.setState({city:Patientlist[id].city})
      
    }
  
  
    render() {
      return (
        <>
        <div className='centered-block'>
          <Checkbox label='Devis'name='quot' checked={this.state.quot} onChange={this.handleCheck}/>
          <Checkbox label='Organisme' name='org' checked={this.state.org} onChange={this.handleCheck}/>
          <Checkbox label='Enfant' name='child' checked={this.state.child} onChange={this.handleCheck}/>
          <Checkbox label='Seconde prestation' name='isPresta2' checked={this.state.isPresta2} onChange={this.handleCheck}/>
          <Checkbox label='Déplacements' name='mouv' checked={this.state.mouv} onChange={this.handleCheck}/>
        </div>
          <input type="date" id="date" className='medium-input centered-block'></input>
          <Switch label={this.state.org?'Organisme':'Personne'} name='registred' checked={this.state.registred} onChange={this.handleCheck}>{this.state.org?'Organisme':'Patient'} {this.state.registred?'enregistré':'non-enregistré'}</Switch>
          {this.state.registred?
          <select className='select-patient-input centered-block' placeholder='Selectionner le nom' name='billName' onChange={this.handleSelectedPatient}>
            {patientSelect}
          </select>
          :<input id="billName"
          name="billName"
          placeholder='Nom'
          value={this.state.name}
          onChange={this.handleChange}
          className='medium-input centered-block'/>
          }
          {this.state.child
          ?<input id="childName" name="childName" placeholder="Nom de l'enfant" value={this.state.childName} onChange={this.handleChange} className='medium-input centered-block'/>
          :<></>}
          <input id="adress"
                 name="adress"
                 placeholder="Adresse"
                 value={this.state.adress}
                 onChange={this.handleChange}
                 className='medium-input centered-block'/>
          <div className='centered-block'>
            <input id="postcode"
                  name="postcode"
                  placeholder="Code postale"
                  value={this.state.postcode}
                  onChange={this.handleChange}
                  className='small-input inline'/>
            <input id="city"
                  name="city"
                  placeholder="ville"
                  value={this.state.city}
                  onChange={this.handleChange}
                  className='small-input inline'/>
          </div> 
          <input id="Object"
                 name="Object"
                 placeholder="Objet"
                 value={this.state.object}
                 onChange={this.handleChange}
                 className='medium-input centered-block'/>  
          <label className='centered-block'>Numero de {this.state.quot ? 'bilan' : 'facture'}</label>
          <div>
            <input id="invoiceN1"
                    name="invoiceN1"
                    type='number'
                    value={this.state.invoiceN1}
                    onChange={this.handleChange}
                    step="1"
                    min='0'
                    className='small-input inline'/>
              <input id="invoiceN2"
                    name="invoiceN2"
                    type='number'
                    value={this.state.invoiceN2}
                    onChange={this.handleChange}
                    step="1"
                    min='0'
                    className='small-input inline'/>
          </div>
          <div>
            <select className='select-presta-input' value={this.state.presta1} name='presta1' onChange={this.handleChange}>
            {prestations}
            </select>
            <input id="nbPresta1"
                      name="nbPresta1"
                      type='number'
                      value={this.state.nbPresta1}
                      onChange={this.handleChange}
                      step="1"
                      min='0'
                      className='verry-small-input inline'/>
          </div>
          {this.state.isPresta2
          ?<div>
          <select className='select-presta-input' value={this.state.presta2} name='presta2' onChange={this.handleChange}>
          {prestations}
          </select>
          <input id="nbPresta2"
                    name="nbPresta2"
                    type='number'
                    value={this.state.nbPresta2}
                    onChange={this.handleChange}
                    step="1"
                    min='0'
                    className='verry-small-input inline'/>

        </div>
          :<></>
          }
          
          <>
          {
           this.state.mouv
           ?<input id="mouvePrice"
           name="mouvePrice"
           type="number"
           placeholder="Frais de déplacements"
           value={this.state.mouvePrice}
           onChange={this.handleChange}
           min='0'
           step='0.01'
           className='medium-input centered-block'/>
           :<></>
          }
          </>
          
        {JSON.stringify(this.state )}
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