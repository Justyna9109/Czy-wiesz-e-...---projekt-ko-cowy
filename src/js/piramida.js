import React,{Component} from 'react';

class Piramida extends Component{
    render() {
        return <section className='piramid'>
        <div>
            <div className='picturePiramid'><img className='picture' src="src/images/image.jpg"></img></div>
            <h1>Piramida żywieniowa - opis</h1>
            <h3>Aktywność fizyczna</h3>
            <p>U podstawy piramidy znajduje się aktywność fizyczna
                – rozumiana nie tylko jako typowy sport ale także: chodzenie po schodach, spacer, nordic walking, etc.
                Według IŻŻ codziennie na aktywność fizyczną powinniśmy poświęcić przynajmniej 30-45 minut.</p>
            <h3>Owoce i warzywa</h3>
            <p>Ogólnie zaleca się spożycie 4-5 posiłków w ciagu dnia. Według wytycznych IŻŻ
                podstawą diety są warzywa i owoce – powinny one stanowić połowę tego co jemy.
                Istotne są też proporcje, bo 3/4 powinny stanowić warzywa, mniej zaś owoce.</p>
            <h3>Produkty zbożowe</h3>
            <p>Na wyższym szczeblu znajdują się produkty zbożowe – co istotne: rekomenduje się spożycie
                produktów pełnoziarnistych, bo to one są zdrowszym wariantem.</p>
            <h3>Nabiał</h3>
            <p>Dalej pojawia się nabiał – np. 2 szklanki mleka, który można też zastąpić innym produktem mlecznym,
                takim jak jogurty naturalne, kefiry.</p>
            <h3>Mięso</h3>
            <p>Dwa najwyższe szczeble to produkty, których często nadużywamy – mięsa. Warto aby zamiast czerwonego
                mięsa, które powinniśmy jeść sporadycznie – pojawiały się w diecie nasiona roślin strączkowych, ryby,
                jaja, chude mięso. Ma to znaczenie szczególnie w unikaniu spożycia dużej ilości nasyconych kwasów tłuszczowych</p>
            <h3>Tłuszcze</h3>
            <p>Na szczycie piramidy znajdują się tłuszcze. Warto zwrócić uwagę na to jakie tłuszcze wybieramy – raczej odradza się
                spożywanie dużej ilości tłuszczów zwierzęcych. Warto zastępować je tłuszczami roślinnymi
                – np. olej rzepakowy, oliwa z oliwek.</p>
            <h3>Nieobecni</h3>
            <p>Na marginesie warto wspomnieć o tym, co warto wyeliminować z diety. Są to cukier, słodycze
                (które można zastąpić owocami) oraz sól (aby jedzenie było smaczne, można wykorzystać zioła).
                Nie warto pić alkoholu, natomiast należy pić wodę (ok. 1,5 litra dziennie)</p>

            <ul>Przydatne linki</ul>
            <li>Zmiany piramidy żywieniowej na przestrzeni lat >
                <a href="https://dietetycy.org.pl/zmiany-piramidy-zywienia-na-przestrzeni-lat/" target='_blank'>link</a></li>
            <li>Harvardzka piramida żywieniowa >
                <a href="https://dietetycy.org.pl/harvardzka-piramida-zdrowego-zywienia/" target='_blank'>link</a></li>
            <li>Pełny opis piramidy znajdziesz na stronie IŻŻ >
                <a href="http://www.izz.waw.pl/attachments/article/7/Piramida%20Zdrowego%20%C5%BBywienia%20i%20Aktywno%C5%9Bci%20Fizycznej%20Broszura.pdf" target='_blank'>
                    link</a></li>

        </div>
        </section>
    }
}

export default Piramida;