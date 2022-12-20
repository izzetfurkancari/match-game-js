function tile(id) {
	
	this.id = id;
	this.frontColor = '#fcfcfc';
	this.backColor = '#fff';
	this.startAt = 1000;
	this.flipped = false;
	this.backContentImage = null;
	this.flipCompleteCallbacks = new Array();
	
	this.flip = function() {

		$("#" + this.id).flip({
			direction: this.flipMethod,
			color: this.backColor,
			content: this.getBackContent(),
			onEnd: this.onFlipComplete()
		});

		$("#" + this.id + " img").show();
		
		this.flipped = true;
	};
	
	this.onFlipComplete = function() {
	
		console.log("Flip complete");
		
		while(this.flipCompleteCallbacks.length > 0) {
			
			console.log("Running callback " + this.flipCompleteCallbacks[this.flipCompleteCallbacks.length - 1]);
			this.flipCompleteCallbacks[this.flipCompleteCallbacks.length - 1]();
			this.flipCompleteCallbacks.pop();
		}
	};}