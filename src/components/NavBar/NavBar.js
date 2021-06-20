import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import img from './logo.png';



function NavBar() {
    return (
        <div className="navBar">
            <img src={img} className="logo"/>
            <div>
                <ButtonGroup aria-label="outlined primary button group">
                    <Button variant="contained">PC</Button>
                    <Button variant="contained">Notebooks</Button>
                    <Button variant="contained">Monitores</Button>
                    <Button variant="contained">Accesorios</Button>
                    <Button variant="contained">Placas de video</Button>
                    <Button variant="contained">Más</Button>
                    <Button variant="contained">
                        <CartWidget />
                    </Button>
                </ButtonGroup>
                 
            </div>
        </div>
    )
}

export default NavBar
