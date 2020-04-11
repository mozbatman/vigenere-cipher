import React, {Component} from 'react';

import "./Aciklama.css";
import img from '../../assets/img/vigenere.jpg';

class Aciklama extends Component {
    state = {};

    render() {
        return (
            <div>
                <img className="img" src={img} />
                <div className="sol">
                    <h2>Vigenere Nedir?</h2>
                    <p>
                    Bu şifreleme Fransız kriptograf Blaise de Vigenere'e atfedilen bir yöntemdir. Bunun gibi birden 
                    fazla şifreleme alfabesi kullanan şifreler, çoklu alfabeli (Polyalphabetic) şifreleme yöntemi olarak 
                    adlandırılır. Bu tür yöntemler frekans analizi gibi deşifre tekniklerine karşı dirençli olmakla birlikte 
                    Vigenere şifresi uzun yıllar boyu Le Chiffre Undechiffrable (kırılamaz şifre) olarak anılmıştır.
                    </p>
                    <p>
                    Arkasında yatan mantık ise Sezar şifrelemeyle 
                    aynıdır: Belirli bir anahtara göre şifrelenmek istenen kelimedeki harfleri kaydırmak.
                    </p>
                </div>
               <div className="sag">
                    <h2>Şifreleme nasıl gerçekleşir?</h2>
                    <p>
                    "METIN" kelimesi sifrelenecek metin olsun. Anahtar key ise "SIFRE" olsun. Sifrelenmiş metin "EMYZR"dir. İlk harften örnek gösterecek olursak M harfi S kadar kaydırılacaktır. ASCII karsılıkları toplamı 160 tır. Fakat Z harfi 90 oldugundan dolayı kaydırma işlemi Z ye geldikten sonra yeniden A harfine dönerek devam eder. <br/>
                    Bizim yaptığımız yöntem büyük küçük harf duyarlıdır. Yani harf buyuk ıse buyuk harf cıktısı üretir.
                    Küçük ise küçük harf çıktısı üretir. Ayrıca Sifrelenecek harf ve Keydeki harf toplamları sonucu kaydırılacak
                    harf z harfini geçerse yeniden a harfine donerek ilerleme yapılır.
                    </p>
               </div>
            </div>
        );
    }
}


export default Aciklama;