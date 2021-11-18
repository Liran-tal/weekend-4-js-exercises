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

console.log("countingDuplicates('abCde'): ", countingDuplicates('abCde'));
console.log("countingDuplicates('aabbCde'): ", countingDuplicates('aabbCde'));
console.log("countingDuplicates('aabBCde'): ", countingDuplicates('aabBCde'));
console.log("countingDuplicates('invisibility'): ", countingDuplicates('invisibility'));
console.log("countingDuplicates('invisibilities'): ", countingDuplicates('invisibilities'));
console.log("countingDuplicates('aA11'): ", countingDuplicates('aA11'));
console.log("countingDuplicates('ABBA'): ", countingDuplicates('ABBA'));
