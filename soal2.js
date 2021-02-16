/* We are given a string input and a array of dictionary. Example dictionary: ['pro', 'gram', 'merit',
'program', 'it', 'programmer'] Find all method we can break the input string into strings inside
dictionary!
*/

function word(word) {
	let activeWord = word;
	let data = [ 'pro', 'gram', 'merit', 'program', 'it', 'programmer' ];
	let isDataFound = false;
	let words = [];

	for (let i = 0; i < data.length; i++) {
		if (activeWord.length > 0) {
			if (activeWord.includes(data[i])) {
				words.push(data[i]);
				activeWord = activeWord.substring(data[i].length);
			}
		} else {
			isDataFound = true;
			activeWord = word;
			console.log(`act ${activeWord}`);
			for (let j = 0; j < data.length; j++) {
				if (!words.includes(data[j]) && activeWord.length == word.length && activeWord.includes(data[j])) {
					words.push(data[j]);
					activeWord = activeWord.substring(data[j].length);
				}
			}
			activeWord = activeWord.substring(data[i].length);
		}
		if (i == data.length - 1 && !isDataFound) {
			console.log('no way');
		} else if (i == data.length - 1) {
			console.log(words);
		}
	}
}

word('programmerit');
