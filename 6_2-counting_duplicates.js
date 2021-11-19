function countingDuplicates(arg_str) {
	const tally = {};
	let res = {};
	let loc_str = arg_str.toLowerCase().split('');

	for (char of loc_str){
		char in tally 
			? ++ tally[char] 
			: tally[char] = 1;
		}
	// Exercise option: return count of letters that repeats
	// return (
	// 	Object.values(tally).reduce((counter, value) => {
	// 		return value > 1 ? ++ counter : counter;
	// 	}, 0)
	// );

	// Exercise option: return the letters that repeats and repeat count for each
	for (const key in tally) {
		if (tally[key] > 1) {
			res[key] = tally[key];
		}
	}
	
	return res;
}

console.log("countingDuplicates('abCde'): ", countingDuplicates('abCde'));
console.log("countingDuplicates('aabbCde'): ", countingDuplicates('aabbCde'));
console.log("countingDuplicates('aabBCde'): ", countingDuplicates('aabBCde'));
console.log("countingDuplicates('indivisibility'): ", countingDuplicates('indivisibility'));
console.log("countingDuplicates('indivisibilities'): ", countingDuplicates('indivisibilities'));
console.log("countingDuplicates('aA11'): ", countingDuplicates('aA11'));
console.log("countingDuplicates('ABBA'): ", countingDuplicates('ABBA'));
