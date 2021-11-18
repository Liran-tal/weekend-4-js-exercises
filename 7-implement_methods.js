const test_array = ['a', 3, 2, 'd', 'S', 1, 5, 't', 'f',];

function myFilter(array, callbackFn) {
	const res_arr = [];
	for (let index = 0; index < array.length; index++) {
		let res = callbackFn(array[index], index, array);
		if (res == true){
			res_arr.push(array[index]);
		}
	} 

	return res_arr;
}

function filterNumbers(input_array) {
	const callbackFn = (element) => {
		return isNaN(element) == false; 
	}
	return myFilter(input_array, callbackFn);
}

console.log(filterNumbers(test_array));


// ********************


function myFilter(array, callbackFn) {
	const res_arr = [];
	for (let index = 0; index < array.length; index++) {
		let res = callbackFn(array[index], index, array);
		if (res == true){
			res_arr.push(array[index]);
		}
	} 

	return res_arr;
}

function filterNumbers(input_array) {
	const callbackFn = (element) => {
		return isNaN(element) == false; 
	}
	return myFilter(input_array, callbackFn);
}

console.log(filterNumbers(test_array));
