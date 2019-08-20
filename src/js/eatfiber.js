import React,{Component} from 'react';

class EatFiber extends Component{
    render() {
        return <section className='tableEat'>
        <table rules='all'>
            <tr>
                <th scope="col">Grupa</th>
                <th scope="col">Błonnik</th>
                <th scope='col'>Grupa</th>
            </tr>
            <tr>
                <td>płeć/wiek</td>
                <td>g/dobę</td>
                <td>płeć/wiek</td>
            </tr>
            <tr>
                <td>Lata</td>
                <td>Al <sup>2</sup></td>
                <td>Lata</td>
            </tr>
            <tr>
                <th scope="col">Dzieci</th>
                <td colSpan={2}></td>
            </tr>
            <tr>
                <td>1-3</td>
                <td>10</td>
                <td></td>
            </tr>
            <tr>
                <td>4-6</td>
                <td>14</td>
                <td></td>
            </tr>
            <tr>
                <td>7-9</td>
                <td>16</td>
                <td></td>
            </tr>
            <tr>
                <th scope="col">Chłopcy</th>
                <td></td>
                <th scope='col'>Dziewczęta</th>
            </tr>
            <tr>
                <td>10-12</td>
                <td>19</td>
                <td>10-12</td>
            </tr>
            <tr>
                <td>13-15</td>
                <td>19</td>
                <td>13-15</td>
            </tr>
            <tr>
                <td>16-18</td>
                <td>21</td>
                <td>16-18</td>
            </tr>
            <tr>
                <th scope="col">Mężczyźni</th>
                <td></td>
                <th scope="col">Kobiety</th>
            </tr>
            <tr>
                <td>19-30</td>
                <td>25</td>
                <td>19-30</td>
            </tr>
            <tr>
                <td>31-50</td>
                <td>25</td>
                <td>31-50</td>
            </tr>
            <tr>
                <td>51-65</td>
                <td>25</td>
                <td>51-65</td>
            </tr>
            <tr>
                <td>66-75</td>
                <td>20<sup>2</sup></td>
                <td>66-75</td>
            </tr>
            <tr>
                <td>>75</td>
                <td>20<sup>2</sup></td>
                <td>>75</td>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <th scope='col'>Ciąża</th>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <td>II trymestr</td>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <td>III trymestr</td>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <th scope='col'>Laktacja</th>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <td>0-6 miesięcy</td>
            </tr>
        </table>
        </section>
    }
}

export default EatFiber;