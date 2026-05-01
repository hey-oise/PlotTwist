import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import NewsLister from "./NewsLister";

export default function App() {
  const [online, setOnline] = useState(navigator.onLine);
  function updateOnlineStatus() {
    setOnline(navigator.onLine);
  }
  setInterval(updateOnlineStatus, 0);
  return (
    <BrowserRouter>
    
      < Menu />
      {
      online?
        <>
    <Routes>
      <Route path="/" element={<NewsLister currentRoute='trending' />} />
              <Route path="/trending" element={<NewsLister currentRoute='trending' />} />
              <Route path="/business" element={<NewsLister currentRoute='business' />} />
              <Route path="/sports" element={<NewsLister currentRoute='sports' />} />
              <Route path="/politics" element={<NewsLister currentRoute='politics' />} />
              <Route path="/health" element={<NewsLister currentRoute='health' />} />
              <Route path="/science" element={<NewsLister currentRoute='science' />} />
              <Route path="/technology" element={<NewsLister currentRoute='technology' />} />
              <Route path="/entertainment" element={<NewsLister currentRoute='entertainment' />} />
              <Route path="*" element={<p className="noPage">404 page not found!</p>} />
    </Routes>
    </>
      : <p className="noPage">you appear offline try refreshing the page!</p>
}</BrowserRouter>
  )
}