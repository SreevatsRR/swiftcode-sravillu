var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
	

	$scope.messages=[
	{
		sender:"BOT",
		text:"Hi 1",
		time:"1:12PM"
	},
	{ 
		text:"Hi 2",
		time:"1:13PM"

	},
	{
		sender:"BOT",
		text:"Hi 3",
		time:"1:14PM"
	},
	{
		text:"Hi 4",
		time:"1:15PM"
	}
	];


var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };
});

