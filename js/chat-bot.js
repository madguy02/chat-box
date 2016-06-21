function chatBot() {
	
	
	this.input;
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "hello tell me something about yourself";
		
		if(this.match('i am a computerscience student') || this.match('engineering') || this.match('student'))
			return "okay well...do you know about datastructures and algorithms";
		
		if(this.match('yes') || this.match('okay') || this.match('fine'))
			return "tell me about the principle of chinese remainder theorem";

		if(this.match('cool'))
			return "okay,can do better";
		
		if(this.match('(\n|^).*?(?=\n|$)'))
			return ["alright,goodluck"];
		
		if(this.match('(\n|^).*?(?=\n|$)'))
			return ["i will let you  know"];
		
		if(this.input == 'okay')
			return;
		
		return input + " what?";
	}
	
	
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
