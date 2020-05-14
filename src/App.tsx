import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.sass';


function Padre(){
  const resultado = 'Hola  hijo';
 return(
     <Hijo mensaje={resultado} />
 )
}
function Hijo({mensaje}:{mensaje: string}){
  return(
   <h1>{mensaje}</h1>
  )
}


function App() {  
  interface State {
    name: string;
    surname: string;
  }
const initialState = {
  name: "",
  surname: ""
}
  const [stateApp, setStateApp] = useState<State>(initialState);
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log(stateApp)
  }
  
  return (
    <div className="App">
     <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Padre />

          <form onSubmit={handleSubmit} className="mt-3 mx-auto">
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-3 mt-1">Nombre</label>
              <input type="text" name="name" value={stateApp.name}
                className="form-control col-sm-9" onChange={evt=> setStateApp({...stateApp,name: evt.target.value})} ></input>
            </div>
            <div className="form-group row">
              <label htmlFor="surname" className="col-sm-3 mt-1">Apellidos</label>
              <input type="text" name="surname" value={stateApp.surname} 
                className="form-control col-sm-9" onChange={evt=> setStateApp({...stateApp,surname: evt.target.value})} ></input>
            </div>
            <button type="submit" value="accion" className="btn btn-success">Ingresar</button>
          </form>
        </div>

      </div>
    </div>
   </div> 
  )
}

export default App;
