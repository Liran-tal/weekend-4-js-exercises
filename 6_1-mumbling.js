function accum(string) {
	// if (!/[a-zA-Z]/.test(string)) {
	// 	return -1;	
	// }
	const char_arr = string.split('').map((char, idx) => {
			return char.toUpperCase() + char.toLowerCase().repeat(idx);
	});

	return char_arr.join('-');
}

console.log("accum(abcd): ", accum('abcd'));
console.log("accum(RqaEzty): ", accum('RqaEzty'));
console.log("accum(cwAt): ", accum('cwAt'));