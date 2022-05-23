let tarpAnimation = {};
	tarpAnimation.intervals = {};
	tarpAnimation.createIntervalKey = function(){
		return new Date().getUTCMilliseconds()
	};
	tarpAnimation.move = function(startPosition, endPosition, speed = 1){
		let key = this.createIntervalKey;
		this.intervals[key] = setInterval((startPosition, endPosition, speed, key)=>{
			console.log('interval');
			if(startPosition.x < endPosition.x){
				startPosition.x+= speed;
				if(startPosition.x > endPosition.x){startPosition.x = endPosition.x}
			}else if(startPosition.x > endPosition.x){
				startPosition.x-= speed;
				if(startPosition.x < endPosition.x){startPosition.x = endPosition.x}
			}
			if(startPosition.y < endPosition.y){
				startPosition.y+= speed;
				if(startPosition.y > endPosition.y){startPosition.y = endPosition.y}
			}else if(startPosition.y > endPosition.y){
				startPosition.y-= speed;
				if(startPosition.y < endPosition.y){startPosition.y = endPosition.y}
			}
			if(startPosition.x == endPosition.x && startPosition.y == endPosition.y){
				clearInterval(this.intervals[key])
			}
		}, 16, startPosition, endPosition, speed, key);
	};
