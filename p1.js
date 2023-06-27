function reverseStr(str) {
	let result = '';
	for (let i = str.length; i >= 1; i--) {
		result += str[i-1];
	}
	return result;
}

console.log(reverseStr('nichts'));