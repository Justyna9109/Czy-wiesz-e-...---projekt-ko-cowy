import React, {Component} from "react";
import Clock from './clock.js'
import AddTwoNumbers from './BMI.js'

class Section extends Component{
    render() {
        return(<>
                <Clock/>
                <section className='pictures'>
                <div className='picture_chair'>
                    <div className='child'>

                        </div>
                        <div className='child_name'>
                        <a className='first_chair' href=''>Let food be your medicine and let your medicine be your food.</a>
                        </div>
                </div>
                </section>



                <section className='aktual'>
                    <img className='nfz' src='/src/images/nfz.jpg'/>
                    <div className="box">
                    <h1>Dieta od NFZ</h1>
                    <p>Bezpłatny dostęp do diet dostosowanych m.in. do płci, wieku, poziomu aktywności fizycznej oraz lista zakupów
                        i opcja zmiany posiłków. W serwisie Narodowego Funduszu Zdrowia zarejestrowało się już blisko 170 tysięcy osób.
                        Wystarczy wejść na stronę, by sprawdzić tygodniową dietę DASH
                        (przeciwdziała nadciśnieniu, rozwojowi otyłości, cukrzycy i miażdżycy) 1200 kcal lub wegetariańską 1500 kcal <br/>
                        <a href="https://diety.nfz.gov.pl/local/diet/login.php/" target='_blank'>   czytaj więcej</a>
                    </p>
                    </div>
                </section>

                <section className='principle'>
                    <div className="greyBox">
                        <h2>10 przykazań zdrowego żywienia</h2>
                    </div>
                    <div className='greenbox'>
                    <p>Jeśli będziemy odżywiać się zgodnie z nimi i dodamy codzienną aktywność fizyczną, mamy szansę
                        na długie życie w zdrowiu i dobrej kondycji. <br/>
                        <a href="https://ncez.pl/abc-zywienia-/zasady-zdrowego-zywienia/podstawowe-zasady-zdrowego-zywienia" target='_blank'>   czytaj więcej</a>
                    </p>
                    </div>
                </section>

                <img className='nfz1' src='/src/images/nfz2.jpg'/>

                <section className='dodatki'>
                    <div className="boxE">
                        <h3 className='dodatkiE'>E - dodatki</h3>
                    </div>
                    <div className='boxsE'>
                        <p>Wiele produktów spożywczych ma w swoim składzie ”E” ale czy symbol ”E” w składzie skreśla produkt?
                            Utarło się przekonanie, że jeśli coś zawiera ”E” jest niezdrowe i najlepiej tego nie kupować.
                            <br/>Ale czy to słuszne stwierdzenie ...
                            <a href="http://natkazdrowia.pl/dodatki-do-zywnosci-czy-e-jest-zle/" target='_blank'><br/>czytaj więcej </a> </p>
                    </div>
                </section>

                <img className='nfz3' src='/src/images/nfz3.png'/>

                <section className='waga'>
                    <div className="wagaBmi">
                        <h1>BMI =</h1>
                    </div>
                <AddTwoNumbers/>
                </section>

                <footer>
                    <img className='tree' src='/src/images/main1.jpg'/>
                    <div className="name">
                        <p className='tele'>500 Terry Francois Street <br/>San Francisco, CA 94158 <br/>info@mysite.com</p>
                        <p className='sig'> | </p>
                        <p className='surname'> FOOD MEDICINE </p>
                        <p className='sig1'> | </p>
                        <img className='fb' src='/src/images/fb.jpg'/>
                        <img className='ima' src='/src/images/ins.png'/>
                        <img className='twit' src='/src/images/twit.png'/>
                        <a className="first_name" href="">@2019 Copywritten by Justyna Kasprzyk </a>
                    </div>
                </footer>
                </>

        )
    }
}

export default Section;
/*<img className='green' src="/src/images/main.jpeg"/>*/