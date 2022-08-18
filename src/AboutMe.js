import React from 'react';
import './App.css';
import './index.js';

import phd from './assets/files/Thesis_final_v2.pdf';


class AboutMe extends React.Component {

render() {
  return (
<article>
<div className='content'>
Urodzony w 1978 roku w Jeleniej Górze.
<br />
Finalista wojewódzkiego szczebla Olimpiady Matematycznej dla uczniów szkół podstawowych (III miejsce).
<br />
Dwukrotny uczestnik II etapu Olimpiady Informatycznej w latach 
<a href="https://www.oi.edu.pl/l/3oi_1etap_wyniki/"> 1996 </a>
i 
<a href="https://oi.edu.pl/l/4oi_1etap_wyniki/"> 1997</a>.
<br />
W 1998 roku II miejsce (drużynowo) w I Dolnośląskich Zawodach w Programowaniu Zespołowym.
<br />
Doktorat pod tytułem: 
<a href={phd}> „Voxel Method for Realistic Rendering” </a> 
obroniony w 2009 roku (promotor Prof. Rémy Malgouyres).
<br />
W 2011 roku udział w projekcie 
<a href="https://wca.wroc.pl/nasi-stazysci-zielony-transfer"> „Zielony Transfer” </a>
 - rozwój współpracy pomiędzy sferą nauki i biznesu – transfer wiedzy. 
<br />
Od stycznia 2014 do września 2015 (od pomysłu do pierwszych 
  <a href="https://roverchallenge.eu/"> zawodów</a>) opiekun naukowy studenckiego koła Continuum zajmującego się projektowaniem i budową łazika marsjańskiego.
<br />
W 2015 udział w projekcie
Miejski Program Wsparcia Partnerstwa Szkolnictwa Wyższego i Nauki oraz Sektora Aktywności Gospodarczej
<a href="https://www.wroclaw.pl/akademicki-wroclaw/dr-lukasz-piwowar-imagination-technologies-limited-zbadanie-dokladnosci-operacji-zmiennoprzecinkowych"> „MOZART“ </a>
, przedsiębiorstwo: Imagination Technologies Limited Oddział w Polsce.
<br />
W latach 2015-2018 lider Wroclaw Khronos Chapter - promocja otwartych standardów (m.in.: OpenCL, OpenGL, WebGL, Vulkan, glTF) konsorcjum Khronos w lokalnej społeczności programistów z Wrocławia.
<br />
W 2020 promotor zwycięskiej pracy dyplomowej w 
<a href="https://www.youtube.com/watch?v=O3GbhpHi12Y&t=1118s"> konkursie </a>
na najlepsze prace dyplomowe Instytutu Informatyki UWr pod tytułem: "Implementacja systemu gier do rehabilitacji osób z zaburzeniami błędnika za pomocą posturografu" (autorzy: Dominik Hawryluk i Izabela Strumecka).
<br />
W latach 2013-2022 CEO spółki BRIGHTER3D SOFTWARE DEVELOPMENT LTD. sprzedającej m.in.
<a href="https://www.brighter3d.com"> plugin  </a> 
do liczenia autorską metodą fotorealistycznych obrazów pozbawionych szumu.
<br />
Mieszka w podwrocławskiej wsi wraz z żoną i dwójką dzieci.
    </div>
    </article>
  );
}

}
export default AboutMe;
