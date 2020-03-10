import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//components
import ArticleList from './Article/ArticleList';
import CreateArticle from './Article/CreateArticle';
import Header from './Header';
import history from '../history';

class App extends React.Component {

	render(){
		return (
			<div className="container">
		      <Router history={history}>
		        <div>
		          <Header />
		          <Switch>
		            <Route path="/" exact component={ArticleList} />
		            <Route path="/article/new" exact component={CreateArticle} />
		     
		          </Switch>
		        </div>
		      </Router>
    		</div>
		);
	}
}

export default App;