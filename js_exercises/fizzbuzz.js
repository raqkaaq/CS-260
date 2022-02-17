let s = "";
for(let i = 1; i <= 100; i++){
	if(i % 3 == 0 || i % 5 == 0){
		if(i % 3 == 0){
			if(i % 5 == 0){
				s += " FizzBuzz, ";
			} else {
				s += " Fizz, ";
			}
		} else {
			s += " Buzz, ";
		}
	} else {
		s += " " + i + ", ";
	}
}
