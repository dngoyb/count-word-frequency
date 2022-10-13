const sentence = document.getElementById('input');
const button = document.querySelector('button');
const ol = document.querySelector('ul');

const frequencies = {};
const frequenciesArray = [];

const str = sentence.value
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

button.addEventListener('click', (e) => {
	let position = 0;
	ol.innerText = '';
	for (let i = 0; i < 3; i++) {
		const li = document.createElement('li');
		li.innerHTML = ` ${frequenciesArray[i].word.toUpperCase()}: was counted ${
			frequenciesArray[i].count
		}`;
		ol.appendChild(li);
	}
});
