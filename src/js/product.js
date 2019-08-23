import React,{Component} from 'react';

class Product extends Component {
    render() {
        return <section className='produkt'>
            <ul><a className='etykiet'> Czytanie etykiet</a>

                <li className='prod'>Długa lista składników - im dłuższa, tym zazwyczaj gorzej</li>
                <div className='etyk'>
                <img src='/src/images/etyk.jpg'/>
                <img src='/src/images/etyk1.jpg'/>
                <img src='/src/images/etyk2.jpg'/>
                </div>

                <li className='prod'>Składnik występuje tylko częściowo, a reszta jest dopełniana czymś innym</li>
                <div className='etyk'>
                <img src='/src/images/etyk4.jpg'/>
                <img src='/src/images/etyk3.jpg'/>
                </div>

                <li className='prod'>Zawartość soli, cukru i słodzików</li>
                <div className='etyk'>
                <img src='/src/images/etyk5.jpg'/>
                </div>

                <li className='prod'>Sprawdzaj zawartość Polski w Polsce</li>
                <div className='etyk'>
                <img src='/src/images/etyk6.jpg'/>
                <img src='/src/images/etyk7.jpg'/>
                </div>

                <li className='prod'>Jeżeli czytasz etykietę i znajdujesz coś, czego nie jesteś w stanie wymówić, albo nie masz pojęcia
                    co to słowo oznacza, to lepiej poszukać czegoś innego </li>
                <div className='etyk'>
                <img src='/src/images/etyk8.png'/>
                <img src='/src/images/etyk9.png'/>
                </div>

                <li className='prod'>Jak najmniej E, najlepiej wcale</li>
                <div className='etyk'>
                <img src='/src/images/etyk10.jpg'/>
                </div>

                <li className='prod'>Im mniej przetworzona żywność tym lepiej</li>
                <div className='etyk'>
                <img src='/src/images/etyk11.jpg'/>
                <img src='/src/images/etyk12.jpg'/>
                </div>
            </ul>
        </section>
    }
}

export default Product;