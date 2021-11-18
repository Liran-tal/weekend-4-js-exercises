function countingDuplicates(arg_str) {
	const tally = {};
	let loc_str = arg_str.toLowerCase().split('');

	for (char of loc_str){
		char in tally 
			? ++ tally[char] 
			: tally[char] = 1;
	}
	return (
		Object.values(tally).reduce((counter, value) => {
			return value > 1 ? ++ counter : counter;
		}, 0)
	);
}

function isIsogram(in_str) {
	return countingDuplicates(in_str) === 0;
}

console.log("isIsogram('Dermatoglyphics'):", isIsogram('Dermatoglyphics'));
console.log("isIsogram('aba'):", isIsogram('aba'));
console.log("isIsogram('moOse'):", isIsogram('moOse'));