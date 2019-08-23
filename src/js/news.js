import React,{Component} from 'react';
import {Link} from "react-router-dom";

class News extends Component {
    render() {
        return <section className='news'>
            <div className='newsQuiz'>
                <Link className='quiz' id='quiz1' to='/quiz'><p>Quiz I <br/> poziom łatwy</p></Link>
                <Link className='quiz' id='quiz2' to='/quiz1'><p>Quiz II <br/> poziom średnio trudny</p></Link>
                <Link className='quiz' id='quiz3' to='/quiz2'><p>Quiz III <br/> poziom trudny</p></Link>
            </div>
        </section>
    }
}

export default News;