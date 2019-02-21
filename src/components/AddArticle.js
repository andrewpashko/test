import React, { Component } from 'react';
import uuid from 'uuid';
import ArticleList from './ArticleList';

class AddArticle extends Component {
  state = {
    title: '',
    content: '',
    date: '',
    id: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      date: new Date(),
      id: uuid()
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    let allArticles = JSON.parse(localStorage.getItem('articles')) || [];
    allArticles.push(this.state);
    localStorage.setItem('articles', JSON.stringify(allArticles));
    document.getElementById('add-article').reset();
    this.props.getArticles();
  }

  render() {
    return (
      <>
        <h1 className="mb-6 text-dark">New Article</h1>
        <form id="add-article" onSubmit={this.onSubmit} className="mb-7">
          <div className="form-group">
            <input
                className="form-control form-control-lg"
                type="text"
                name="title"
                id="article-title"
                placeholder="Article Title"
                onChange={this.onChange}
                required
            />
            <small className="form-text text-muted mb-4 ml-3">Give it a short name</small>
          </div>

          <div className="form-group">
            <textarea
              className="form-control "
              type="textarea"
              name="content"
              id="article-content"
              placeholder="Article text"
              onChange={this.onChange}
              required
            />
            <small className="form-text text-muted mb-5 ml-3">Type the best article you can write</small>
          </div>

          <button className="btn btn-lg btn-primary col-sm-12 col-lg-auto" type="submit">
            Submit
          </button>
        </form>

        <ArticleList articles={this.props.articles.slice(0,3)} />
      </>
    )
  }
}

export default AddArticle;