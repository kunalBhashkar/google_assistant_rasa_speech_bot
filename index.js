const express = require('express');
const bodyParser = require('body-parser');
const googleActions = require('actions-on-google');

let ActionsSdkAssistant = googleActions.ActionsSdkAssistant;

//create an express app
const app = express();
//setup bodyparser middleware to handle JSON and urlencoded post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//this endpoint is really not needed, this is just to test if our server is accessible
app.get('/', (request, response) => {
    response.send(':)');
});

//this endpoint is where 'Google Assistant' is going to post messages whenever users interact with it.
app.post('/', (request, response) => {
    const assistant = new ActionsSdkAssistant({ request, response });
    const actionsMap = new Map();
    actionsMap.set(assistant.StandardIntents.MAIN, mainHandler);
    actionsMap.set(assistant.StandardIntents.TEXT, rawInput);

    assistant.handleRequest(actionsMap);
});

//start the server to listen on port 3300
app.listen(3300, () => {
    console.log('app started listening on port', 3300);
});

//this is the trigger handler which will be called when a user asks google assistant 'talk to movie teller'
let mainHandler = function (assistant) {
    let inputPrompt = assistant.buildInputPrompt(false, `Welcome, what can I do for you?`, ['say something']);
    assistant.ask(inputPrompt);
}

//this handler get's called for all the subsequent interactions with google assistant after user is connected to the bot
//this is where we can place all the logic to make the bot respond to user queries



var request = require('request');


let rawInput = function (assistant) {
    let rawInput = assistant.getRawInput();
 	request.post(
	'http://8fc31862.ngrok.io/api/v1/240/respond',
    { json: { query: rawInput } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            
	   	 console.log(body);
		
		info = JSON.parse(JSON.stringify(body));
         	assistant.ask(body[0].text); 			
        }
	else{
		console.log(error);	
	    }
    }
);

//assistant.ask('testing');

/*if (rawInput === 'bye') {
        assistant.tell('GoodBye')
    } 

else if (rawInput.toLowerCase().trim() === 'suggest me a movie') 
	{
        	let movies = ['Logan', 'Split', 'John Wick Chapter 2', 'Rogue One A Star Wars Story'];
        	let inputPrompt = assistant.buildInputPrompt(false, `sure, go ahead and watch the movie titled ${movies[Math.floor(4 * Math.random())]}, it's 			fantastic. Enjoy`);
        	assistant.ask(inputPrompt);
    	}
 else if (rawInput.toLowerCase().trim() === 'suggest me a newmovie') {
        	let movies = ['Logan', 'Split', 'John Wick Chapter 2', 'Rogue One A Star Wars Story'];
        	let inputPrompt = assistant.buildInputPrompt(false, `sure, go ahead and watch the movie titled ${movies[Math.floor(4 * Math.random())]}, it's 			fantastic. Enjoy`);
        	assistant.ask(inputPrompt);
    	}
 else {
        	let inputPrompt = assistant.buildInputPrompt(false, `you said ${rawInput}`);
        	assistant.ask(inputPrompt);
    }*/


}















