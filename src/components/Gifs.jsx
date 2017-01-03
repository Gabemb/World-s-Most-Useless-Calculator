import React from 'react';
import $ from 'jquery'

const Gifs = React.createClass({
	getInitialState(){
		return {gifs: "", terms: ["puppies", "laughing", "babies", "spongebob", "kanye", "crazy", "cat", "ouch", "trump", "harambe"]}
	},
	componentDidMount(){
		let url = "http://api.giphy.com/v1/gifs/random?"
		let key = "apikey"
		let tempArr = this.props.search.toString().split("")
		let search = this.state.terms[tempArr[tempArr.length-1]]
		let that = this
		$.ajax({
			url: url + key + search,
			success: function (data) {
				console.log(data)
				that.setState({gifs: data.data.image_original_url})
			}
		})
	},
	render(){
		console.log(this.props)
		return (
			<div className="giphy">
				<img src={this.state.gifs}></img>
			</div>
		)
	}
})

export default Gifs;

//data[0].images.original.url