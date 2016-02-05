var React=require("react");
var ListItem=require("./listItem.jsx");

var users=[
{
	name:"Rahul Baruri",
	info:"Software engineer at GG Team"
},
{
	name:"Talha Vai",
	info:"Software engineer at Blue Scheme"
},
{
	name:"Edi Amin Vai",
	info:"Software engineer at We Devs"
}

];

var UserList=React.createClass(
	{
	render:function(){
		var usersIems=users.map(function(val){
			console.log(val.name);
			return (<ListItem key={ new Date().getTime() } name={val.name} info={val.info}/>);


		});
		return(<div>{ usersIems }</div>);
	}
});

module.exports=UserList;