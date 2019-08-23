import React,{Component} from 'react';

class Fats extends Component{
    render() {
        return <section className='fats'>
            <h1>Tłuszcze</h1>
            <p>Tłuszcze są podstawowym źródłem energii dla człowieka. Ułatwiają także odczuwanie smaku
                i nadają pożądaną konsystencję produktom oraz dostarczają witamin rozpuszczalnych w tłuszczach (A, D, E, K)</p>
            <p>O tym, że nadmiar tłuszczów jest dla zdrowia niekorzystny, prawdopodobnie wiedzą wszyscy.
                Mniej powszechna jest wiedza o tym, że szkodzą też niewłaściwe proporcje tłuszczów pochodzenia
                zwierzęcego i roślinnego.</p>
            <ul className='fat'><a className='fatsdivision'> Podział</a>
                <li>zwierzęce (masło, smalec)</li>
                <li>roślinne (oleje, margaryny)</li>
            </ul>
            <p>Masło, smalec, oleje i margaryny to tzw. tłuszcze widoczne, które stanowią około połowy zjadanego przez nas tłuszczu.
                Fakt, że dieta części populacji jest zbyt bogata w tłuszcze  wynika z tego, że co najmniej połowę tłuszczu dostarczamy sobie,
                często nieświadomie, razem z produktami mało kojarzonymi ze stosunkowo dużą zawartością tłuszczu
                (tego niewidocznego). To różne wyroby cukiernicze, słodycze, przetwory mięsne, jak: wędliny,
                w tym kiełbasy, parówki, pasztety, sery podpuszczkowe i pleśniowe, sosy ze śmietaną itd.
                Aby unikać tłuszczu niewidocznego, należy czytać etykiety i wybierać produkty mniej tłuste.</p>
            <ul className='fatnutrition'><a className='fatsnutrition'> Kilka faktów o wartości odżywczej</a>
                <li>Tłuszcze zwierzęce zawierają duże ilości nasyconych kwasów tłuszczowych (NKT) i cholesterolu,
                    których spożycie należy ograniczać.</li>
                <li>Tłuszcze roślinne natomiast nie zawierają cholesterolu, mają mniej kwasów nasyconych,
                    a więcej korzystnych kwasów jedno- i wielonienasyconych, czyli niezbędnych nienasyconych
                    kwasów tłuszczowych (NNKT).</li>
                <li>W diecie powinny przeważać tłuszcze roślinne.</li>
            </ul>
            <div className='badFats'>
        <img src='src/images/image3.jpg'/>
            </div>
        </section>
    }
}

export default Fats;