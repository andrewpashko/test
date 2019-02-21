import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AddArticle from './components/AddArticle';
import ArticleSingle from './components/ArticleSingle';

class App extends Component {
  state = {
    articles: []
  };

  getAllArticles = () => {
    const allArticles = JSON.parse(localStorage.getItem('articles')) || [];
    let filtered = allArticles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    this.setState({
      articles: [...filtered]
    });
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container main-container">
            <Switch>
              <Route
                exact
                path='/'
                render={
                  props => <Home articles={this.state.articles} />
                }
              />
              <Route
                path='/add-article'
                render={
                  props => <AddArticle {...props} articles={this.state.articles} getArticles={this.getAllArticles} />
                }
              />
              <Route
                path='/articles/:article_id'
                render={
                  props => <ArticleSingle {...props} articles={this.state.articles} />
                }
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;