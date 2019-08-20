import React,{Component} from 'react';

class Vitamin extends Component{
    render() {
        return <section className='vitamin'>
            <h1>Witaminy</h1>
            <p>To substancje niezbędne do życia i prawidłowego funkcjonowania organizmu człowieka.
                Są one zwykle potrzebne w niewielkich ilościach w pożywieniu w celu regulowania i wspierania
                reakcji chemicznych zachodzących w organizmie. Spełniają na ogół rolę katalizatorów biologicznych.
                Odkrycie witamin i udowodnienie ich roli w odżywianiu człowieka nastąpiło na przełomie XIX i XX w.</p>
            <ul>Podział
                <li>Rozpuszczalne w tłuszczach które mają zdolność gromadzenia się w tkankach.</li>
                <div className='vitaminFats'>
                <img src='src/images/image6.png'/>
                </div>
                <li>Rozpuszczalne w wodzie nie kumulują się w organizmie, a ich nadmiar jest wydalany z moczem.</li>
                <div className='vitaminWater'>
                    <img src='src/images/image7.png'/>
                </div>

            </ul>
        </section>
    }
}
export default Vitamin;