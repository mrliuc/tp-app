
(function(util){
	if(!util){
		util={};
	}
	
	util.compressImage = function(path, callback) {
		console.log(path);
		var img = new Image();
		img.src = path; // 
		img.onload = function() {
			var that = img;
			//生成比例 
			var w = that.width/2,
				h = that.height/2,
				scale = w / h;
//			w = 800 || w; //480  
//			h = w / scale;

			//生成canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');

//console.log(w+','+h);
			canvas.width = w;
			canvas.height = h;

			ctx.drawImage(that, 0, 0, w, h);
			var base64 = canvas.toDataURL('image/jpeg', 0.8);
			var data = base64.split(",")[1];
			callback(data,base64);
		}
	};
	
}(window.Util))
