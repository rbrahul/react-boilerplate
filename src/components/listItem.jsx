var React=require("react");

var listItem=React.createClass({
	render:function(){
		return (
			<li>
			<h4>{this.props.name}</h4>
			<p>{this.props.info}</p>
			</li>
			);
	}
});
module.exports=listItem;