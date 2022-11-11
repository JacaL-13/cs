function addToZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) return true
		}
	}
	return false
}

//Time O(n^2)
//Space O(n)

function hasUniqueChars(str) {
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) return false
		}
	}
	return true
}

//Time O(n^2)
//Space O(n)

function isPangram(str) {
	let abc = 'abcdefghijklmnopqrstuvwxyz'
	for (let i = 0; i < str.length; i++) {
		abc = abc.replace(str[i], '')
	}
	return abc.length === 0
}

//Time O(n)
//Space O(n)

function findLongestWord(arr) {
	let longest = ''
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length >= longest.length) {
			longest = arr[i]
		}
	}
	return longest.length
}

//Time O(n)
//Space O(n)