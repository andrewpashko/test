import React, { Component } from 'react';

class ArticleSingle extends Component {
  state = {
    article: null,
  }

  componentDidMount() {
    let id = this.props.match.params.article_id;
    const allArticles = JSON.parse(localStorage.getItem('articles'));
    let articleSingle = allArticles.find((article) => {
      return article.id === id;
    });
    this.setState({ article: articleSingle });
  }

  render() {
    const article = this.state.article ? (
        <div>
          <h1 className="mb-6 text-dark">{this.state.article.title}</h1>
          <p className="text-muted font-weight-light">{this.state.article.content}</p>
        </div>
    ) : (
      <p>Loading...</p>
    );

    return (
      <>
        { article }
      </>
    )
  }
}
export default ArticleSingle;