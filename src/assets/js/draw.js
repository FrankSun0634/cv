var draw = {
	init: function(viewer){
		this._viewer = viewer
	},

	show: function(){
		if(typeof this._viewer != "undefined"){
			alert("viewer")
		}
		alert("Hello")
	},

	line: function(options){
		let p1 = options.p1
		let p2 = options.p2
		let redLine = this._viewer.entities.add({
		    name : 'Red line on the surface',
		    polyline : {
		        positions : Cesium.Cartesian3.fromDegreesArray([p1.lon, p1.lat,
		                                                        p2.lon, p2.lat]),
		        width : 5,
		        material : Cesium.Color.RED
		    }
		});
	}
};


export default draw