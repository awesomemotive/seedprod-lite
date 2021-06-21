const version = process.argv[2] || 'Pro';
const file = 'languages/seedprod-' + version.toLowerCase() + '.pot';

const { po } = require('gettext-parser');
const { writeFileSync, readFile } = require('fs');

function cleanUnique() {
	readFile(file, function (err, data) {
		const file_read = po.parse(data);
		writeFileSync(file, po.compile(file_read));
	});
}

cleanUnique();
