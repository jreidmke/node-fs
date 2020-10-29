const fs = require("fs");
const axios = require("axios");

function readLocal() {
    fs.readFile(process.argv[2], 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    })
}

async function webCat() {
    const data = (await axios.get(process.argv[2]));
    fs.readFile(data.data, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    })
}

if(process.argv[2].slice(0, 7) === "http://") {
    webCat(process.argv[2])
} else {
    readLocal(process.argv[2])
}