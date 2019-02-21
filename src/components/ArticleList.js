import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = props => {
  return props.articles.map(article => (
    <li  className="list-group-item" key={article.id}>
      <Link to={'/articles/' + article.id} className="text-break">
        {article.title}
      </Link>
    </li>
  ));
}

export default ArticleList;