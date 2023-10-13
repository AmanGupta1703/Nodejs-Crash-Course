const fs = require("fs");

const TEXT_FILE = `${__dirname}/file.txt`;

/*fs.readFile(`${__dirname}/file.txt`, "utf-8", function (error, data) {
	if (error) return console.log(error);
	console.log(data);
});*/ // non-blocking code

// will get buffer data if
// const data = fs.readFileSync(`${__dirname}/file.txt`, "utf-8"); // blocking code
/*const data = fs.readFileSync(TEXT_FILE); // blocking code
console.log(data.toString());
console.log("Completed reading the file...");*/

//  ====================================================
// WRITING TO A FILE
// =====================================================

/*fs.writeFile(TEXT_FILE, "Here, I'm writing to the file...", function (error) {
	if (error) console.log(error);

	console.log("Written to the file...");
});*/ // non-blocking code

fs.writeFileSync(TEXT_FILE, `hello, world ${new Date().toLocaleDateString()}`); // blocking code

console.log("Finished writing to the file...");
