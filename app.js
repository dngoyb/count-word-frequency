const sentence =
	'Plat and play the the, not bad 55 ?Greek, The Not so good and play';

const frequencies = {};
const frequenciesArray = [];

const str = sentence
	.toLowerCase()
	.replace(/[^\w -]/g, '')
	.split(' ');

for (const word of str) {
	if (word) {
		frequencies[word] ? frequencies[word]++ : (frequencies[word] = 1);
	}
}

for (let key in frequencies) {
	frequenciesArray.push({
		word: key,
		count: frequencies[key],
	});
}

frequenciesArray.sort((a, b) => b.count - a.count);

for (let i = 0; i < 3; i++) {
	console.log(
		`${i}. ${frequenciesArray[i].word.toUpperCase()}: was counted ${
			frequenciesArray[i].count
		}`
	);
}
