const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
// Read the path of "pathDataJson.xlsx", and read the file
const pathDataFile = path.join(process.cwd(), "dataProduct.xlsx");
const file = XLSX.readFile(pathDataFile);
// Sheet name
const sheetName = file.SheetNames;
// Sheet to JSON
const dataJson = XLSX.utils.sheet_to_json(file.Sheets[sheetName[0]]);
// We have the path where the JSON is stored, and we write it
const pathDataJson = path.join(__dirname, "../sheet_to_json.json");
fs.writeFileSync(pathDataJson, JSON.stringify(dataJson));
