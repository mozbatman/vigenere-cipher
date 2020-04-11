import React, {Component} from 'react';
import All from "../All/All";

import "./App.css"

class App extends Component {
    state = {
        sifreliMetin: "",
        cozulmusMetin: ""
    };

    constructor() {
        super();
        this.sifrele = this.sifrele.bind(this);
        this.sifreCoz = this.sifreCoz.bind(this);
    }

    sifrele(metin, sifre){
        let sifreliMetin = "";
        let sifreM = "";
        let sonuc = "";
        for (var i=0 ; i< metin.length; i++){
            if (metin.charCodeAt(i)<97){
                sifreM = (sifre.charCodeAt(i%sifre.length))<97 ? sifre.charCodeAt(i%sifre.length)-65 : sifre.charCodeAt(i%sifre.length)-97
                if (metin.charCodeAt(i)+sifreM > 90){
                    sonuc = String.fromCharCode(metin.charCodeAt(i)+sifreM-26);
                }else{
                    sonuc = String.fromCharCode(metin.charCodeAt(i)+sifreM);
                }
                sifreliMetin += sonuc;
                console.log(sifreliMetin);
            }else{
                sifreM = (sifre.charCodeAt(i%sifre.length))<97 ? sifre.charCodeAt(i%sifre.length)-65 : sifre.charCodeAt(i%sifre.length)-97
                if (metin.charCodeAt(i)+sifreM > 122){
                    sonuc = String.fromCharCode(metin.charCodeAt(i)+sifreM-26);
                }else{
                    sonuc = String.fromCharCode(metin.charCodeAt(i)+sifreM);
                }
                sifreliMetin += sonuc;
                console.log(sifreliMetin);
            }
        }
        this.setState({
            sifreliMetin,
        })
    }

    sifreCoz(metin, sifre){

        var cozulmusMetin = "";
        let sifreM = "";
        let sonuc = "";
        for (var i=0 ; i< metin.length; i++){
            if (metin.charCodeAt(i)<97){
                sifreM = (sifre.charCodeAt(i%sifre.length))<97 ? sifre.charCodeAt(i%sifre.length)-65 : sifre.charCodeAt(i%sifre.length)-97
                if (metin.charCodeAt(i)-sifreM < 65){
                    sonuc = String.fromCharCode(metin.charCodeAt(i)-sifreM+26);
                }else{
                    sonuc = String.fromCharCode(metin.charCodeAt(i)-sifreM);
                }
                cozulmusMetin += sonuc;
                console.log(cozulmusMetin);
            }else{
                sifreM = (sifre.charCodeAt(i%sifre.length))<97 ? sifre.charCodeAt(i%sifre.length)-65 : sifre.charCodeAt(i%sifre.length)-97
                if (metin.charCodeAt(i)-sifreM < 97){
                    sonuc = String.fromCharCode(metin.charCodeAt(i)-sifreM+26);
                }else{
                    sonuc = String.fromCharCode(metin.charCodeAt(i)-sifreM);
                }
                cozulmusMetin += sonuc;
                console.log(cozulmusMetin);
            }
        }
        this.setState({
            cozulmusMetin,
        })

    }

    render() {
        return (
            <div className={"app"}>
                <All sifrele={this.sifrele} sifreliMetin={this.state.sifreliMetin} sifreCoz={this.sifreCoz} cozulmusMetin={this.state.cozulmusMetin}></All>
            </div>
        );
    }
}


export default App;