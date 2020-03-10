import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../actions'

class ArticleList extends React.Component {
	componentDidMount(){
		this.props.fetchArticles();
	}

	renderList = () =>{
		const {articles} = this.props;
		
		console.log(articles);

		if(!articles.length) return <div>Loading...</div>;

		return articles.map(art =>{

			return(<div className="container" key={art._id}> 
			<ul className="list-group">
			<h4 className="list-group-item-heading">{art.name}</h4>
    		<p className="list-group-item-text">description: {art.description}</p>
    		<p className="list-group-item-text">price: {art.price}</p>
			</ul>
			</div>);
		});

	}

	render(){
		
	return <div> {this.renderList()} </div>;
	}
}

const MapStateToProps = (state) =>{
	//receiving an object from articleReducer, and then convert it to array
	return {articles: Object.values(state.articles)};
}

export default connect(
MapStateToProps, 
{fetchArticles}
)(ArticleList);