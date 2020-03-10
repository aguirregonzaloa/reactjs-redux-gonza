import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createArticle } from '../../actions';


class CreateArticle extends React.Component {

	renderError({error, touched}){
		if(touched && error)
		return <div className="alert alert-danger"> You must enter a <strong>{error}</strong></div>
	}

	//destructurying the prorForm to {input,label, meta}
	renderInput = ({input,label, meta}) =>{
		let classname='form-group';
		if(meta.touched && meta.error)
			 classname='form-group has-error';
		if(meta.touched && meta.valid)
			 classname='form-group has-success';
		return (
			<div className={classname}>
				<label htmlFor="exampleInputEmail1" className="col-sm-2 control-label">
				{label}
				</label>
				<div className="col-sm-10">
				<input id="exampleInputEmail1" className="form-control"	{...input}/>
				{this.renderError(meta)}
				</div>
			</div>
			);
			
	}

	onSubmit = (formValue) => {
		this.props.createArticle(formValue);
	}

	render(){
		// console.log(this.props);
	return (
		<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-horizontal">
		<Field name="name" component={this.renderInput} label="Article Name:"/>
		<Field name="description" component={this.renderInput} label="Description:"/>
		<Field name="price" component={this.renderInput} label="Price:"/>
			<div className="form-group">
				<div className="col-sm-offset-2 col-sm-10">
				<button className="btn btn-primary">Submit</button>
				</div>
			</div>
		</form>
		);
	}
}

const validate = (formValue) =>{
	const errors = {};
	if(!formValue.name){
		errors.name= ' name';
	}

	if(!formValue.description){
		errors.description= 'You must enter a description';
	}

	if(!formValue.price){
		errors.price= 'You must enter a price';
	}

	return errors;
}

const formWrapped = reduxForm({
	form: 'articleCreate',
	validate
})(CreateArticle);

export default connect(null, {createArticle})(formWrapped);