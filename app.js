const sentence =
	'Plat and play the the, not bad 55 ?Greek, The Not so good and play';

const frequencies = {};
const str = sentence
	.toLowerCase()
	.replace(/[^\w -]/g, '')
	.split(' ');

for (const word of str) {
	if (word) {
		frequencies[word] ? frequencies[word]++ : (frequencies[word] = 1);
	}
}

console.log(frequencies);
