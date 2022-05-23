// Canvas Library - v1 - 2020/05/05 - dirobu
function tarp(query){
	let o = {};
		o.render = false;
		o.query = query;
		o.canvas = document.querySelector(query);
		o.canvas.width = o.canvas.offsetWidth;
		o.canvas.style.width = o.canvas.offsetWidth;
		o.canvas.height = o.canvas.offsetHeight;
		o.canvas.style.height = o.canvas.offsetHeight;
		o.context = o.canvas.getContext('2d',{alpha: true});
		o.context.webkitImageSmoothingEnable = false;
		o.context.mozImageSmoothingEnabled = false;
		o.context.imageSmoothingEnabled = false;
		o.state = false;
		o.states = {};
		o.interval = setInterval((o)=>{
			o.context.clearRect(0, 0, o.canvas.width, o.canvas.height);
			if(o.state && o.state != '' && o.states[o.state]){
				o.states[o.state](o.canvas, o.context)
			}else if(o.render){
				o.render(o.canvas, o.context)
			}
		},16,o);
	return o
}
