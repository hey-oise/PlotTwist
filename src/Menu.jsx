import { useState } from "react";
import { Link } from 'react-router-dom';
import menuImg from './assets/menu.png';
import theater from './assets/theater.png';
import trendingIcon from './assets/trending.png';
import sportsLogo from './assets/sports.png';
import politicsLogo from './assets/agreement.png';
import arrow from './assets/arrow.png';
import science from './assets/science.png';
import health from './assets/healthcare.png';
import technology from './assets/responsive.png';

function QuickLinks(props) {
  return (
    <div className="linkInd">
    <Link to={props.path} className="quickLinks">
      <img className="linkImg" src={props.imgUrl}/>{props.text}</Link></div>
  )
}
export default function Menu() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  function toggleMenu() {
    if (menuIsOpened) {
      setMenuIsOpened(false);
    } else {
        setMenuIsOpened(true);
      }
  }
  return (
    <>{!menuIsOpened ? <button className="toggleMenuButton" onClick={toggleMenu}><img className="menuImg" src={menuImg}/></button> :
      <>
      <div className="menu">
        <p className="menuLogo">Plot twist</p>
          <div className="linksPar">
            {/* <div className="searchMenu"><img src={searchBar} alt="searchBar"></img><p>search</p></div>*/}
          
            <QuickLinks path='/trending' text='trending' imgUrl={trendingIcon} />
            <QuickLinks path='/entertainment' text='entertainment' imgUrl={theater} />
            <QuickLinks path='/business' text='business' imgUrl={arrow} />
            <QuickLinks path='/sports' text='sports' imgUrl={sportsLogo} />
            <QuickLinks path='/politics' text='politics' imgUrl={politicsLogo} />
            <QuickLinks path='/science' text='science' imgUrl={science} />
            <QuickLinks path='/technology' text='technology' imgUrl={technology} />
            <QuickLinks path='/health' text='health care' imgUrl={health} />
            
        </div>
        </div>
      
        <div className="toggleBg" onClick={toggleMenu}></div>
      </>
    }
    </>
  )
}