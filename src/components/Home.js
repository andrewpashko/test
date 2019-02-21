import React from 'react';
import { Link } from 'react-router-dom';
import ArticleList from './ArticleList';

const Home = ({ articles }) => {
  return (
    <>
      <div className="d-lg-flex align-items-center mb-7">
        <h1 className="mr-4 mb-4 mb-lg-0 text-dark">Articles</h1>
        <Link className="btn btn-lg btn-primary col-lg-auto col-sm-12" to="/add-article">Add New</Link>
      </div>
      <ul className="list-group">
        <ArticleList articles={articles} />
      </ul>
    </>
  )
}

export default Home;
