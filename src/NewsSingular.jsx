import { useState } from "react";

export default function NewsSingular({ title, link, author, source, imgLink, publishedAt, content, header, linkTo }) {
  const [isOpened, setIsOpened] = useState(imgLink);
  let date = [];
  for (let i = 0; i < 10; i++) {
          date.push(publishedAt[i]);
      }
  if (isOpened == imgLink) {
    return (
      <div onClick={function () {
        setIsOpened(title);
      }} to={link} className="newsSingle">
        <img className="newsImageSingle" src={imgLink} />
        <p className="newsTitle">{title}</p>
        <p className="newsDateS">{date} {publishedAt[12]}{publishedAt[13]}{publishedAt[14]}{publishedAt[15]}</p>
        <p className="author">from {author} <b>{source}</b></p>
      </div>
    )
  } else if (isOpened === title) {
    return (
      <div className="newsReaderPar">
        <button className="readerbutton1" onClick={function () {
          setIsOpened(imgLink);
        }}>back</button>
        <h1 className="newsReaderTitle">{header}</h1>
        <img className="readerImg" src={imgLink} alt='news image'></img>
        <p className="newsReaderContent">{content}</p>
        <a href={linkTo} target="_blank" className="readerbutton2">read full article</a>
      </div>
    )
}
}