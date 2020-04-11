import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./SifreCozme.css"

class SifreCozme extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        metin: "",
        sifre: ""
    };

    static propTypes = {
        sifreCoz : PropTypes.func.isRequired
    };

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.sifreCoz(this.state.metin, this.state.sifre);
    }

    render() {
        return (
            <div>
                <h2>Sifreleme</h2>
                <form onSubmit={this.onSubmit}>
                    <p>Sifrelenmiş Metin:</p>
                    <input type="text"
                           onChange={this.onChange}
                           value={this.state.metin}
                           name={"metin"}
                           id={"metin"}
                           placeholder={"Sifrelenecek metni giriniz"}/>
                    <p>Sifre:</p>
                    <input type="text"
                           onChange={this.onChange}
                           value={this.state.sifre}
                           name={"sifre"}
                           id={"sifre"}
                           placeholder={"Sifreyi Giriniz"}/>
                    <br/>
                    <button>Şifre Çöz</button>
                </form>
            </div>
        );
    }
}


export default SifreCozme;