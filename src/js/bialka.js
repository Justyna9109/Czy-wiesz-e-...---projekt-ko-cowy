import React,{Component} from 'react';

class Protein extends Component{
    render() {
        return <section className='protein'>
            <h1>Białko (inaczej proteiny)</h1>
            <p>To główny materiał budulcowy organizmu, stanowi około 20% masy ciała człowieka, w tym głównie układu mięśniowego.
                Białko pełni wiele ważnych funkcji, zapewniając prawidłowy stan i funkcjonowanie organizmu.
                Odpowiednia ilość białek wpływa na prawidłowy wzrost i rozwój człowieka oraz regenerację uszkodzonych tkanek.</p>
            <ul>Budowa
            <li>Białko występuje we wszystkich żywych organizmach. Białka to wielocząsteczkowe biopolimery zbudowane
                z reszt aminokwasów połączonych ze sobą wiązkami peptydowymi -CONH-. Istnieje około 20 aminokwasów,
                a 8 z nich, zwanych niezbędnymi lub egzogennymi (lizyna, leucyna, izoleucyna, metionina, fenyloalanina,
                treonina, tryptofan, walina) zawartych jest w białku pochodzenia zwierzęcego oraz w nasionach
                roślin strączkowych (soja, fasola).</li>
            </ul>
            <h3>Podział</h3>
            <ul>Białko proste (proteiny) zbudowane z aminokwasów.
                <li>Albuminy - białka rozpuszczalne w wodzie i rozcieńczonych roztworach soli.
                    Można je spotkać w surowicy krwi, w limfie,
                    mleku, jajach, w nasionach roślin strączkowych i zbóż (żyto, pszenica).</li>
                <li>Globuliny - białko nierozpuszczalne w wodzie, ale rozpuszcza się w rozcieńczonych roztworach
                    soli objętych. Bardzo łatwo ulega ścięciu. Do białek tych należą: globuliny surowicy krwi,
                    globulina mleka, fibrynogen osocza, miozyn mięśni, tyreoglobulina oraz ciała odpornościowe.</li>
                <li>Gluteliny - białka rozpuszczalne w rozcieńczonych roztworach kwasów i zasad, a nierozpuszczalne
                    w wodzie i roztworach soli. Zawiera znaczne ilości aminokwasu - kwasu glutaminowego i glutaminy
                    oraz proliny. Występują w nasionach roślin dwuliściennych, ale w największych ilościach w ziarnach zbóż.</li>
                <li>Prolaminy - zwane też są gliadynami. Rozpuszczają się w 70-80% alkoholi. Występują wyłącznie w ziarnach zbóż.</li>
                <li>Histony - zasadowe białka jąder komórkowych, w których występują w połączeniach z kwasami nukleinowymi, 
                    tworząc nukleoproteidy. Histony są dobrze rozpuszczalne w wodzie i w rozcieńczonych roztworach kwasów.</li>
                <li>Protaminy - białko silnie zasadowe. Występują w plemnikach ryb, gdzie tworzą połączenia z kwasami nukleinowymi.</li>
            </ul>
            <ul>Białka złożone
                <li>Chromoproteiny - związki organiczne złożone z białek prostych i grupy prostetycznej – barwnika.
                    Należą tu hemoproteidy zawierające układ hemowy oraz flawoproteidy.</li>
                <li>Fosfoproteidy - związki organiczne, które zawierają około 1% fosforu w postaci reszt kwasu fosforowego.
                    Do tych białek należą: kazeina mleka, witelina żółtka jaj, ichtulina ikry ryb.</li>
                <li>Nukleoproteidy - składają się z białek zasadowych i kwasów nukleinowych. Rybonukleoproteidy są
                    zlokalizowane przede wszystkim w cytoplazmie: w rybosomach, mikrosomach i mitochondriach,
                    w niewielkich ilościach także w jądrach komórkowych.</li>
                <li>Lipoproteidy - związki organiczne, składające się z połączenia białek z tłuszczami prostymi
                    lub złożonymi, sterydami. Lipoproteidy są nośnikami cholesterolu (LDL, HDL, VLDL).</li>
                <li>Glikoproteidy - grupę prostetyczną tych białek stanowią cukry, należą tu m.in. mukopolisacharydy (ślina). 
                    Glikoproteidy występują też w substancji ocznej i w płynie torebek stawowych.</li>
                <li>Metaloproteidy - zawierają jako grupę prostetyczną atomy metalu miedź, cynk, żelazo, wapń, magnez.
                    Atomy metalu stanowią grupę czynną wielu enzymów.</li>
            </ul>

        </section>

    }
}
export default Protein;