function organizeStrings(s1, s2) {
	const split_s1 = s1.split('');
	const split_s2 = s2.split('');
	let res = [];
	for(char of split_s1){
		if (!res.includes(char.toLowerCase())) {
				res.push(char.toLowerCase());
		}
	};
	
	for(char of split_s2){
		if (!res.includes(char.toLowerCase())) {
				res.push(char.toLowerCase());
		}
	};

	return res.sort().join('');
}


let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

console.log(`a = ${a}\nb = ${b}\n organizeStrings(a, b) = `, organizeStrings(a, b));
