let tarpAnimation = {
    intervals: {},
    createIntervalKey: function(){
        return new Date().getUTCMilliseconds()
    },
};
tarpAnimation.move = function(startPosition, endPosition, speed = 1){
    let key = this.createIntervalKey;
    this.intervals[key] = setInterval((startPosition, endPosition, speed, key)=>{
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
tarpAnimation.movePoint = function(point, value){
    if(point.d == 'down'){
        point[value]+= point.speed || 1;
        if(point[value] > 90){point[value] = 90; point.d = 'up'}
    }else if(point.d == 'up'){
        point[value]-= point.speed || 1;
        if(point[value] < 60){point[value] = 60; point.d = 'down'}
    }else{
        point.d = 'down'
    }
};
