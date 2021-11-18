const test_array = ['a', 3, 2, 'd', 'S', 1, 5, 't', 'f',];

function myFilter(array, callbackFn, thisArg) {
	const res_arr = [];
	for (let index = 0; index < array.length; index++) {
		let res = undefined;
		if (!thisArg) {
			res = callbackFn(array[index], index, array);
		} else{
			res = callbackFn(array[index], index, array, thisArg);
		}
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

// console.log(filterNumbers(test_array));


// ********************


function myForEach(array, callbackFn, thisArg) {
	for (let index = 0; index < array.length; index++) {
		if (!thisArg) {
			callbackFn(array[index], index, array);
		} else{
			callbackFn(array[index], index, array, thisArg);
		}
	} 

	return undefined;
}

function printArray(input_array) {
	const callbackFn = (element) => {
		console.log(element);
	}
	myForEach(input_array, callbackFn);
	return 0;
}

// printArray(test_array);


//**************************** */


function myMap(array, callbackFn, thisArg) {
	const res_arr = [];
	for (let index = 0; index < array.length; index++) {
		let res = undefined;
		if (!thisArg) {
			res = callbackFn(array[index], index, array);
		} else{
			res = callbackFn(array[index], index, array, thisArg);
		}
		console.log(res);
		res_arr.push(res);
	} 

	return res_arr;
}

function toCharsArray(input_array) {
	const callbackFn = (element) => {
		console.log(element);
		return element.toString(); 
	}
	return myMap(input_array, callbackFn);
}

console.log(toCharsArray(test_array));