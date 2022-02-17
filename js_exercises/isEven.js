let isEven = function(a){
	if(a < 0 || Number.isInteger(a)) return "Invalid input";
	if(a == 0) return true;
	if(a == 1) return false;
	else return isEven(a - 2);
}
