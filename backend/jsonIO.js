const fs = require("fs");

// Functia de citire din fisierul db.json
module.exports.readJSONFile = () => {
  return JSON.parse(fs.readFileSync('db.json'))['players'];
}

// Functia de scriere in fisierul db.json
module.exports.writeJSONFile = (content) => {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ players: content }, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}