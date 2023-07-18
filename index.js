const fs = require('node:fs/promises');
const fsSync = require('fs');
const firstFile = "./first.txt";
const secondFile = "./second.txt";


function readFile(file) {
	fs.readFile(file, "utf-8")
		.then((text) => console.log(text))
		.catch((err) => console.log(err));
}

function createFile(file, data) {
	fs.writeFile(file, data, err => {
		console.log(err);
	});
}

function saveData(file) {
	return fsSync.readFileSync(file, "utf-8");
}

readFile(firstFile);

createFile(secondFile, "");

createFile(secondFile, "I like NodeJS");

readFile(secondFile);

fs.appendFile("./second.txt", ` ${saveData(firstFile)}`, err => {
	console.log(err);
})

