const dictionary = [ 'pro', 'gram', 'merit', 'program', 'it', 'programmer' ];

const findWords = (words) => {
	let done = false;
	let outputWords = [];
	while (!done) {
		for (let i = 0; i < dictionary.length; i++) {
			if (words.includes(dictionary[i])) {
				done = true;
				outputWords.push(dictionary[i]);
			}
		}
	}
	return outputWords;
};

console.log(findWords('programmerit'));

// function word(word) {
// 	let activeWord = word;

// 	let data = [ 'pro', 'gram', 'merit', 'program', 'it', 'programmer' ];
// 	let isDataFound = false;
// 	let words = [];

// 	for (let i = 0; i < data.length; i++) {
// 		if (activeWord.length > 0) {
// 			if (activeWord.includes(data[i])) {
// 				words.push(data[i]);
// 				activeWord = activeWord.substring(data[i].length);
// 			}
// 		} else {
// 			isDataFound = true;
// 			activeWord = word;
// 			console.log(`act ${activeWord}`);
// 			for (let j = 0; j < data.length; j++) {
// 				if (!words.includes(data[j]) && activeWord.length == word.length && activeWord.includes(data[j])) {
// 					words.push(data[j]);
// 					activeWord = activeWord.substring(data[j].length);
// 				}
// 				// else if (words.includes(data[j]) && activeWord.length < word.length) {
// 				// 	words.push(data[j]);
// 				// 	activeWord = activeWord.substring(data[j].length);
// 				// }
// 			}
// 			activeWord = activeWord.substring(data[i].length);
// 		}
// 		if (i == data.length - 1 && !isDataFound) {
// 			console.log('no way');
// 		} else if (i == data.length - 1) {
// 			console.log(words);
// 		}
// 	}
// }

// word('programmerit');
