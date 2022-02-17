let range = function(a, b, step = 1){
	let list = [];
	if(step > 0){
		for(let i = a; i <= b; i += step){
			list.push(i);
		}
	} else if(step < 0) {
		for(let i = a; i >= b; i += step){
			list.push(i);
		}
	}
	return list;
}
let sum = function(a){
	let s = 0;
	for(let i = 0; i < a.length; i++){
		s += a.at(i);
	}
	return s;
}
