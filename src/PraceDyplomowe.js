import React from 'react';
import './App.css';
import './index.js';


class PraceDyplomowe extends React.Component {

render() {
  return (
<article>
<div className='content'>
<h3>Zainteresowania</h3>
Jako promotora interesują mnie głównie prace, które mają zastosowane w rzeczywistości i niezerowy wpływ na życie ludzi.
Interesuje się wszystkim, co jest związane z grafiką komputerową: od ultra realistycznej (liczonej godzinami) do tej czasu rzeczywistego, a także wirtualną/rozszerzoną/mieszaną rzeczywistością.
Lubię języki: rust, c#, c/c++, ruby, javascript a także framework react. Nie lubię javy, R i pythona (ale javy najbardziej). Nie chcę już pisać w basic'u, pascal'u i asemblerze.
<br />
<br />
<h3>Obronione prace których byłem promotorem</h3>
<div className="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Autor</th>
                <th>Tytuł</th>
                <th>Data obrony</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dominik Trautman</td>
                <td>Customizable Pathfinding Unreal Engine 5 plugin</td>
                <td>10 lutego 2023</td>
            </tr>
            <tr>
                <td>Krzysztof Sławik</td>
                <td>Performance comparison of Wave Function Collapse Algorithm implementations</td>
                <td>10 lutego 2023</td>
            </tr>
            <tr>
                <td>Marko Golovko</td>
                <td>Aplikacja mobilna do nauki matematyki dla dzieci w wieku przedszkolnym</td>
                <td>9 września 2022</td>
            </tr>
            <tr>
                <td>Mikołaj Stachnik,<br />
                     Łukasz Wojdon</td>
                <td>Implementacja gry komputerowej wykorzystującej sieć lokalną do komunikacji pomiędzy serwerem znajdującym się na komputerze a kontrolerami na smartfonach</td>
                <td>6 września 2022</td>
            </tr>
            <tr>
                <td>Grzegorz Winiarski</td>
                <td>Collaboard - wirtualna tablica ułatwiająca prowadzenie zajęć zdalnie</td>
                <td>21 lutego 2022</td>
            </tr>
            <tr>
                <td>Jakub Hoffman</td>
                <td>Serwis webowy do dzielenia się oraz łatwego przeszukiwania przepisów kulinarnych we wskazanej diecie</td>
                <td>15 lutego 2022</td>
            </tr>
            <tr>
                <td>Paulina Biruta</td>
                <td>Edukacyjna gra mobilna do nauki matematyki dla dzieci w wieku przedszkolnym</td>
                <td>30 września 2021</td>
            </tr>
            <tr>
                <td>Barbara Piasecka</td>
                <td>Przegląd narzędzia Unity Analytics na podstawie gry Farm - clicker and time management</td>
                <td>27 września 2021</td>
            </tr>
            <tr>
                <td>Jonatan Hrynko</td>
                <td>Proceduralne generowanie grafiki w grze Open Ski Jumping</td>
                <td>17 września 2021</td>
            </tr>
            <tr>
                <td>Karol Cidyło</td>
                <td>Tworzenie interaktywnych modeli 3D pomieszczeń za pomocą MR</td>
                <td>14 lipca 2021</td>
            </tr>
            <tr>
                <td>Konrad Łukaszewicz</td>
                <td>Stworzenie gry ze sztuczną inteligencją z wykorzystaniem Unity Machine Learning Agents Toolkit</td>
                <td>16 września 2020</td>
            </tr>
            <tr>
                <td>Izabela Strumecka,<br />
                    Dominik Hawryluk
                </td>
                <td>Implementacja systemu gier do rehabilitacji osób z zaburzeniem błędnika za pomocą posturografu</td>
                <td>15 września 2020</td>
            </tr>
            <tr>
                <td>Krystian Grabowski,<br />
                Adrian Kamiński,<br />
                Patryk Kumor<br />
                </td>
                <td>Symulator lotów w wirtualnej rzeczywistości do rehabilitacji osób z zaburzeniami błędnika</td>
                <td>14 września 2020</td>
            </tr>
            <tr>
                <td>Jakub Kazimierczak</td>
                <td>System zarządzania pracami dyplomowymi</td>
                <td>15 lutego 2019</td>
            </tr>           
            <tr>
                <td>Piotr Bzówka</td>
                <td>Achieving high performance of high-level code using knowledge of low-level machine architecture</td>
                <td>9 grudnia 2014</td>
            </tr>

        </tbody>
    </table>
</div><br />
    </div>
    </article>
  );
}

}
export default PraceDyplomowe;
