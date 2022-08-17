import React from 'react';
import './App.css';
import './index.js';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import {appendScript} from './appendScript'
import Dydaktyka from './Dydaktyka';
import AboutMe from './AboutMe';

import lpi from './assets/images/lpi.jpg';

class App extends React.Component {

  componentDidMount () {
    appendScript("assets/js/jquery.min.js")
    appendScript("assets/js/browser.min.js");
    appendScript("assets/js/breakpoints.min.js");
    appendScript("assets/js/main.js");
    appendScript("assets/js/util.js");
  }

render() {
  return (

<div id="wrapper">
<div id="main">
    <div className='inner'>
        <header id="header">
          <ul className="icons">
            <li><a href="https://www.facebook.com/zsacul" className='icon brands fa-facebook-f'><span className="label">Facebook</span></a></li>                        
            <li><a href="https://www.youtube.com/channel/UCtg8k7k4wdwnWLx_uaKtaRw" className='icon brands fa-youtube'><span className="label">YouTube (lpi)</span></a></li>
            <li><a href="https://www.youtube.com/user/zsacul" className='icon brands fa-youtube'><span className="label">YouTube (zsacul)</span></a></li>
            <li><a href="https://www.linkedin.com/in/zsacul" className='icon brands fa-linkedin'><span className="label">linkedin</span></a></li>
          </ul>
        </header>
   
        <section id="banner">
        <div className='content'>
            <header>
              <h1>Łukasz Piwowar<br /></h1>              
            </header>
            <p>
            Starszy wykładowca w "Pracowni Grafiki Komputerowej" Instytutu Informatyki Uniwersytetu Wrocławskiego.<br />
            </p>
            <ul className='actions'>
              <li><a href="#omnie" className="button big">Więcej...</a></li>
            </ul>
          </div>
          <span className='image object'>
            <img src={lpi} alt="" />
          </span>
        </section>


        <section id="dydaktyka">
          <header className='major'>
            <h2>Dydaktyka (moje najciekawsze wykłady)</h2>
          </header>
          <div className='features'>

            <article>
              <span className='icon fa-gem'></span>
              <div className='content'>
                <h3>SketchUp</h3>
                <p>Kurs modelowania w programie SketchUp i renderowania z użyciem wtyczki Brighter3D której jestem autorem.
                </p>
              </div>
            </article>
            <article>
              <span className='icon solid fa-paper-plane'></span>
              <div className='content'>
                <h3>Unity</h3>
                <p>
                  Najpopularniejszy obecnie silnik do tworzenia gier. 
                  71% z tysiąca najpopularniejszych gier mobilnych zostało zrobionych w Unity.
                </p>
              </div>
            </article>
            <article>
              <span className='icon solid fa-rocket'></span>
              <div className='content'>
                <h3>Język Rust</h3>
                <p>
                  Według (nie tylko mnie), ten młody język ma szansę zastąpić w pewnych zastosowaniach C/C++ na kolejne 30 lat. 
                  Poprzez swoje mechanizmy poprawia bezpieczeństwo pamięci i pewne aspekty wielowątkowości programów w nim pisanych nie poświęcając przy tym wydajności.
                </p>
              </div>
            </article>
            <article>
              <span className='icon solid fa-signal'></span>
              <div className='content'>
                <h3>Unreal 5</h3>
                <p>
                Studio CD PROJEKT RED zapowiedziało w marcu 2022, że będzie tworzyć przyszłe gry opierając się na silniku Unreal Engine 5.
                Warto znać, jeżeli chce się pracować przy tytułach AAA.
                </p>
              </div>
            </article>
            <Dydaktyka />

          </div>
        </section>

        <section id="omnie">
          <header className='major'>
            <h2>O mnie</h2>
          </header>
          <div className='features'>
            <AboutMe />
          </div>
        </section>
  

    </div>
  </div>


  <div id="sidebar" className=''>
    <div className="inner">


        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a href=".">Główna</a></li>
            <li><a href="#dydaktyka">Dydaktyka</a></li>
            <li><a href="#omnie">O mnie...</a></li>
          </ul>
        </nav>

        <section>
          <header className="major">
            <h2>Kontakt</h2>
          </header>
          <p>
          
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope"><a href="mailto:lpi@cs.uni.wroc.pl">lpi@cs.uni.wroc.pl</a></li>
            <li className="icon solid fa-phone">(+48) 71 375 7834</li>
            <li className="icon solid fa-home">pokój 337<br /></li>
          </ul>
        </section>

        <footer id="footer">
        </footer>

    </div>
  <a href="#sidebar" className="toggle">Toggle</a></div>
</div>
  );
}

}
export default App;


/*
        <section>
          <header className='major'>
            <h2>Ipsum sed dolor</h2>
          </header>
          <div className='posts'>
            <article>
              <a href="#" className='image'><img src="images/pic01.jpg" alt="" /></a>
              <h3>Interdum aenean</h3>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <ul className='actions'>
                <li><a href="#" className='button'>More</a></li>
              </ul>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
              <h3>Nulla amet dolore</h3>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <ul className="actions">
                <li><a href="#" className="button">More</a></li>
              </ul>
            </article>
          </div>
        </section>

*/