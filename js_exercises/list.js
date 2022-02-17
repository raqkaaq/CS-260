let arrayToList = function(a){
	let list = null;
	for(let i = a.length - 1; i >= 0; i--){
		list = {
				value: a.at(i),
				rest: list
			};
	}	
	return list;
}
let listToArray = function(a){
	let array = [];
	for(let next = a; next; next = next.rest){
		array.push(next.value);
	}
	return array;
}
let prepend = function(e, a){
	a = {
		value: e,
		rest: a
	}
	return a;
}
let nth = function(a, n){
	if(a == null)
			return undefined;
	if(n == 0) return a.value;
	else {
		return nth(a.rest , n - 1);
	}
}
