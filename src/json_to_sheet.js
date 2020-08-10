const XLSX = require("xlsx");
const data = require("../dataProduct.json");
// Read the data from the json
const ws = XLSX.utils.json_to_sheet(data);
// Create a new book
const wb = XLSX.utils.book_new();
// Assign values
wb.Props = {
  Title: "SheetJS Tutorial",
  Subject: "Test",
  Author: "Red Stapler",
  CreatedDate: new Date(2017, 12, 19),
};
wb.SheetNames.push("Test Sheet");
wb.Sheets["Test Sheet"] = ws;
// JSON to Sheet
XLSX.writeFile(wb, "json_to_sheet.xlsx");
