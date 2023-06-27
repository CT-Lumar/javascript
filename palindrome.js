function plaindrome(str){
	let result = '';
	for(let i = str.length; i >= 1; i--){
		result += str[i-1];
	}
	if(result == str){
		return true;
	} else {
		return false;
	}
}

function reverseWords(str){
	let result = '';
	for(let i = str.length; i > 0; i--){
		result += str[i-1];
	}
	return result;
}

console.log(reverseWords('nichts'))