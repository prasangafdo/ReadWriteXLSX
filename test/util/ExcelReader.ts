const XLSX = require('xlsx')
class ExcelReader {

    excelToJson(fileLocation){
        let workbook = XLSX.readFile(fileLocation)
        let sheetNames = workbook.SheetNames;

        let excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])

        console.log(excelData)

    }
}
export default new ExcelReader();