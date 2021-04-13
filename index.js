const fs = require("fs");

const s = JSON.stringify(process.env);

fs.writeFileSync("1.txt", s, {
    encoding: "utf8",
});

console.log(fs.readFileSync("1.txt", {
    encoding: "utf8",
}));