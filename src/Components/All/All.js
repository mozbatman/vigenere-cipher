import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./All.css"
import Aciklama from "../Aciklama/Aciklama";
import Sifreleme from "../Sifreleme/Sifreleme";
import SifreCozme from "../SifreCozme/SifreCozme";

class All extends Component {

    static propTypes = {
        sifrele : PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <div className={"baslik"}>
                    <h1>Vigenere Şifreleme</h1>
                </div>
                <div className={"container"}>
                    <Aciklama/>
                    <Sifreleme sifrele={this.props.sifrele}/>
                    <p>Sifrelenmis Metin : { this.props.sifreliMetin }</p>
                    <SifreCozme sifreCoz={this.props.sifreCoz}/>
                    <p style={{marginBottom: "100px"}}>Sifresi Çözülmüş Metin : { this.props.cozulmusMetin }</p>
                </div>
            </div>
        );
    }
}


export default All;