import { useState } from "react";
import searchIcon from './assets/search.png';
import { useRef } from "react";

export default function NewsLister({ currentRoute }) {
  const inputRef = useRef()
  const [isOpened, setIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState();
  function toggleBar() {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  }
  return (
    <>
      {!isOpened ?
        <>
          <button className="toggleSearchButton" onClick={toggleBar}><img className="searchBtn" src={searchIcon} /></button>
        </>
        :
        <div onMouseOver={function () {
          inputRef.current.focus();
        }}>
          <div className="searchMain" onClick={toggleBar}></div>
          <div className="searchBarPar">
            <img className="searchBtn" src={searchIcon} />
            <input onChange={
              function (e) {
                setSearchValue(e.target.value);
              }
            } value={searchValue} onKeyDown={
              function (event) {
                if (event.key == 'Enter') {
                  setIsOpened(false);
                }
              }} ref={inputRef} type="search" className="searchBar" placeholder="What are you looking for?" />
          </div>
        </div>}
      <h1>
      you are in {currentRoute} 
      , and you searched for:{' '} 
      {searchValue}</h1>
    </>
  )
}