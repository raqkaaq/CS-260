let correct = true;
let cheeseType = new Promise((resolve, reject) => { 
    if(correct){
        const cheese = {color: 'yellow', brand: null};
    	resolve(cheese);
    } else {
    	const rej = new Error('There is no cheese');
    	reject(rej);
    }
});
let findCheese = () => {
	cheeseType
		.then(cheese => console.log('Cheese color' + cheese.color))
		.catch(e => console.log(e.message));
};
findCheese();

let correct = true;
async function cheeseType(){
    return new Promise((resolve, reject) =>{
        if(correct){
            const cheese = {color: 'yellow', brand: null};
            resolve(cheese);
        } else {
            const rej = new Error('There is no cheese');
            reject(rej);
        }
    });
}
let findCheese = async () => {
    try{
        let cheese = await cheeseType();
        console.log(cheese.color);
    } catch (e) {
        console.log(e.message);
    }
}
(async () => {
    await findCheese();
})();