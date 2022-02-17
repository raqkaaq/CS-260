function every(array, test) {
  for(let a of array){
  	if(!test(a)) return false; 
  }
  return true;
}
function every2(array, test) {
	return !array.some((e) => !test(e));
}

