const dict = [ 'hot', 'dot', 'dog', 'lot', 'log' ];
var arr = [];

function matchHuruf(word, word1) {
	let wordComparator = word;
	for (let j = 0; j < word.length; j++) {
		wordComparator = word;
		for (let k = 97; k < 124; k++) {
			var alphabet = String.fromCharCode(k);
			wordComparator = wordComparator.split('');
			wordComparator[j] = alphabet;
			wordComparator = wordComparator.join('');
			console.log(`is ${wordComparator} == ${word1}`);
			if (wordComparator == word1) {
				console.log(wordComparator);
				return true;
			}
		}
	}
}

function printShortOfDict(word1, word2) {
	for (let i = 0; i < dict.length; i++) {
		if (i == 0 && dict[i] == word1) {
			arr.push(word1);
		} else if (i == 0) {
			if (matchHuruf(dict[i], word1)) {
				arr.push(word1);
				arr.push(dict[i]);
			}
		} else if (dict[i] == word2) {
			arr.push(word2);
		} else if (matchHuruf(dict[i], word2)) {
			arr.push(dict[i]);
			arr.push(word2);
			break;
		} else if (dict.length - 1 == i && !matchHuruf(dict[i], word2)) {
			arr = 'no way';
		}
	}
	console.log(`ini dia kayaknya : ${arr}`);
}
printShortOfDict('hit', 'dog');
