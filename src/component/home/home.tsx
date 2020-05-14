import React from 'react';
import './home.sass';

class Home extends React.Component{

    render(){
        return(
            <div className="container">

                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Nombre</label>
                        <input type="text" name="surname" className="form-control"></input>
                    </div>
                    <button type="submit" value="accion"></button>
                </form>
            </div>
        )
    }
   
}

export default Home;