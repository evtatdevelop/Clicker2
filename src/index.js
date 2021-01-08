import React from 'react';
import ReactDOM from 'react-dom';
import { Clicker } from './components/clicker/clicker';




class Modul extends React.Component{
    render() {
        return(
            <div>
                <h3>Set value, please</h3>
                <Clicker/>
            </div>
        );
    }
}


ReactDOM.render(
    <Modul/>,
  document.getElementById('root')
);

