import { useState } from "react";
import { Link } from 'react-router-dom';
import menuImg from './assets/menu.png';
import searchBar from './assets/searchImage.png';
import trendingIcon from './assets/trending.png';
import sportsLogo from './assets/sports.png';
import politicsLogo from './assets/agreement.png';

function QuickLinks(props) {
  return (
    <div className="linkInd">
    <a href={props.path} className="quickLinks">
      <img className="linkImg" src={props.imgUrl}/>{props.text}</a></div>
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
           <QuickLinks path='/search' text='search' imgUrl={searchBar} />
            <QuickLinks path='/trending' text='trending' imgUrl={trendingIcon} />
            <QuickLinks path='/sports' text='sports' imgUrl={sportsLogo} />
            <QuickLinks path='/politics' text='politics' imgUrl={politicsLogo} />
        </div>
        </div>
      
        <div className="toggleBg" onClick={toggleMenu}></div>
      </>
    }
    </>
  )
}