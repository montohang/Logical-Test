/* Palindrom adalah angka yang sama jika dibaca dari kiri atau kanan (misalnya 12321, 6226, dsb).
Saat ini diketahui bahwa hasil palindrom terbesar dari perkalian 2 bilangan 2 digit adalah 9009 =
91 * 99 Dengan berbekal input integer n sebagai jumlah digit (asumsikan n ≤ 4), carilah palindrom
terbesar dari perkalian angka n tersebut! */

function cariPalindromeTerbesar(n) {
	let digitAngkaTerbesar = 9 * parseInt('1'.repeat(n)),
		isPalindrome = true,
		hasilPerkalian = 0,
		palindromeTerbesar = 0,
		arrayPalindrome = [];

	for (let i = 1; i <= digitAngkaTerbesar; i++) {
		for (let j = i; j <= digitAngkaTerbesar; j++) {
			hasilPerkalian = i * j;
			isPalindrome = hasilPerkalian === parseInt(hasilPerkalian.toString().split('').reverse().join(''));
			if (isPalindrome) {
				arrayPalindrome.push(hasilPerkalian);
				arrayPalindrome = [ ...new Set(arrayPalindrome.sort((a, b) => a - b)) ];
			}
		}
	}

	palindromeTerbesar = arrayPalindrome[arrayPalindrome.length - 1];
	// console.log(`Angka palindrome : ${arrayPalindrome}`)
	console.log(`Angka palindrome terbesar : ${palindromeTerbesar}`);
}

cariPalindromeTerbesar(4);
