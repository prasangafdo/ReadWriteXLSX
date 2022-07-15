const XLSX = require('xlsx')
class ExcelReader {

    excelToJson(fileLocation, sheetNumber){
        let workbook = XLSX.readFile(fileLocation)
        let sheetNames = workbook.SheetNames;

        let excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetNumber]])

        console.log(excelData)
        return excelData
    }
}
export default new ExcelReader();