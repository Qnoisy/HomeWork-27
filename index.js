const fs = require('node:fs/promises');
const firstFile = "./first.txt";
const secondFile = "./second.txt";


function readFile(file) {
	fs.readFile(file, "utf-8")
		.then((text) => console.log(text))
		.catch((err) => console.log(err));
}
readFile(firstFile);

function createFile(file, data) {
	fs.writeFile(file, data, (err) => {
		console.log(err);
	});
}
createFile(secondFile, "");
createFile(secondFile, "I like NodeJS");