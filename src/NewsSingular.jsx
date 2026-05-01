import { Link } from "react-router-dom";
export default function NewsSingular({ title, link, author, source, imgLink, publishedAt }) {
  let date = [];
  for (let i = 0; i < 10; i++) {
          date.push(publishedAt[i]);
      }
  return (
    <Link to={link} className="newsSingle">
      <img className="newsImageSingle" src={imgLink} />
      <p className="newsTitle">{title}</p>
      <p className="newsDateS">{date} {publishedAt[12]}{publishedAt[13]}{publishedAt[14]}{publishedAt[15]}</p>
      <p className="author">from {author} <b>{source}</b></p>
    </Link>
  )
}