import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsSingular from "./NewsSingular";
import searchIcon from './assets/search.png';
import { useRef } from "react";


export default function NewsLister({ currentRoute }) {
  
  const [searchValue, setSearchValue] = useState();
  const [newsData, setNewsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        let response;
        if (!searchValue) {
          response = await fetch(`https://newsapi.org/v2/top-headlines?category=${currentRoute}&apiKey=2de0898bfa2544c287971568da7f8f2a`);
        } else {
           response = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchValue}&apiKey=a2b939df31ce4b72bb3e12235b1b978e`);
        }
        if (!response.ok) {
          setError(true);
        } else {
          const result = await response.json();
          setNewsData(result);
          setError(false)
        }
      } catch (err) {
        setError(err);
        alert(err)
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentRoute, searchValue]);
  console.log(newsData)
  let content;
  if (isLoading) {
    content = <p>loading...</p>;
  } else if (error) {
    content = error;
  } else if (newsData) {
    content = newsData.articles.map(data => <>
      <NewsSingular title={data.title} imgLink={data.urlToImage} author={data.author} source={data.source.name} publishedAt={data.publishedAt} />
    </>);
  }
  let data = newsData;
  const inputRef = useRef()
  const [isOpened, setIsOpened] = useState(false);
  function toggleBar() {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  }
  return (
    <div className="newsLister">
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
      <h1 className="newsListHeader">{currentRoute}</h1>
      <div className="newsPar">
        {content}
      </div>
      </div>
  )
}