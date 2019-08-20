import React,{Component} from 'react';

class Mineral extends Component{
    render() {
        return <section className='mineral'>
            <h1>Składniki mineralne</h1>
            <p>To grupa związków, których organizm człowieka nie potrafi syntetyzować; muszą być dostarczane
                w odpowiednich ilościach z pożywieniem, dlatego zalicza się je do niezbędnych składników odżywczych.</p>
            <div className='pictureMineral'>
                <img src='src/images/image9.jpg'/>
            </div>
            <ul className='divisionMineral'>Podział
                <li> * składniki będące materiałem budulcowym układu kostnego, zębów, skóry i włosów: wapń (Ca),
                    fosfor (P), magnez (Mg), siarka (S), fluor (F)</li>
                <li> * składniki wchodzące w skład związków o podstawowym znaczeniu dla funkcjonowania organizmu,
                    np. żelazo (Fe) wchodzi w skład hemoglobiny i mioglobiny, jod (I) – tyroksyny, kobalt (Co)
                    – witaminy B12, fosfor (P) – związków wysokoenergetycznych (ATP, ADP, AMP), a cynk (Zn),
                    mangan (Mn), miedź (Cu), żelazo (Fe), selen (Se) i molibden (Mo) są składnikami lub aktywatorami enzymów</li>
                <li> * składniki wpływające na gospodarkę wodno-elektrolitową i utrzymujące równowagę kwasowo-zasadową:
                    sód (Na), potas (K), chlor (Cl), oraz pobudliwość nerwowo-mięśniową: wapń (Ca) i magnez (Mg)</li>
                <li> * składniki utrzymujące przestrzenną strukturę szeregu związków, np. podwójnej spirali DNA: cynk (Zn)
                    i magnez (Mg).</li>
            </ul>
        </section>
    }
}

export default Mineral;