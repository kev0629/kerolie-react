import React, {useState} from 'react';
import 'pretty-checkbox/src/pretty-checkbox.scss'
import './assets/css/style.css'
import Data from './../data/presta.json'

  let Patientlist = Data.Patientlist
  let PrestationList = Data.PrestationList

const prestations = PrestationList.map((PrestationList) =>
  <option key={PrestationList.id}>{PrestationList.prestation}</option>
);

const patientSelect = Patientlist.map((Patientlist) =>
<option key={Patientlist.id} id={Patientlist.id} value={Patientlist.parentsName} >{Patientlist.parentsName}</option>
);

let d = new Date()

function getTodayDate (d){
  let todayDate
  if ((d.getMonth() + 1) < 10) {
    if (d.getDate() < 10) {
      todayDate = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-0" + d.getDate()
    } else {
      todayDate = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate()
      //console.log("test month")
    }
  } else if (d.getDate() < 10) {
    todayDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-0" + d.getDate()
    //console.log("test date")
  } else {
    todayDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
  }
  return todayDate
}


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


class InvoiceForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
      quot:false,
      org:false,
      child:false,
      isPresta2:false,
      mouv:false,
      registred:true,
      date:getTodayDate(d),
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
      acquit:false,
      path:"",

      };
      this.handleChange = this.handleChange.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handlePath = this.handlePath.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.fileInput = React.createRef();
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
      
      const name = event.target.name
      this.setState({[name]:event.target.value})
      const index = document.getElementById('billName').selectedIndex
      if (Patientlist[index-1].childFirstName){
          this.setState({child:true})
      }
      else{
        this.setState({child:false})
      }
      this.setState({childName:Patientlist[index-1].childFirstName})
      this.setState({adress:Patientlist[index-1].adress})
      this.setState({postCode:Patientlist[index-1].postCode})
      this.setState({city:Patientlist[index-1].city})
      
    }
    handlePath = (event) => {
      event.preventDefault();
      const filesPath = this.fileInput.current.files
      // console.log(filesPath[0].path)
      this.setState({path:filesPath[0].path})

    }
    handleSubmit = (event) =>{
      console.log(this.state)
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
          <input type="date" id="date" name='date' className='medium-input center-text centered-block' value={this.state.date} onChange={this.handleChange}></input>
          <BlueSwitch label={this.state.org?'Organisme':'Personne'} name='registred' checked={this.state.registred} onChange={this.handleCheck}>{this.state.org?'Organisme':'Patient'} {this.state.registred?'enregistré':'non-enregistré'}</BlueSwitch>
          {this.state.registred?
          <select className='select-patient-input centered-block' defaultValue='default' name='billName' id="billName" onChange={this.handleSelectedPatient}>
            <option value='default' disabled>Selectionner {this.state.org?"l'organisme":"le patient"}</option>
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
          <label className='centered-block'>Numero de {this.state.quot ? 'Devis' : 'facture'}</label>
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
          <label className="medium-input centered-block" style={{cursor:'pointer'}} htmlFor="path">{this.state.path?this.state.path:"Selctionner un dossier"}</label>
          <input id="path" className='medium-input centered-block input-folder' style={{display:'none'}} directory="" webkitdirectory="" type="file" name='path' onChange={this.handlePath} ref={this.fileInput}/>
          {!this.state.quot
          ?<div className='acquit-switch'>
            <RedSwitch label="Acquité" name='acquit'  checked={this.state.acquit} onChange={this.handleCheck}>Acquitée</RedSwitch>
          </div>
          :<></>
          }
          <button type="button" style={{cursor:'pointer'}} className='centered-block gen-button' onClick={this.handleSubmit}>Générer</button>
          
        {console.log(this.state)}
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