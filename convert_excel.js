const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('Everton Analitic (4).xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync('everton_data.json', JSON.stringify(jsonData, null, 2));
console.log('Data converted successfully!');
console.log('Total players:', jsonData.length);
