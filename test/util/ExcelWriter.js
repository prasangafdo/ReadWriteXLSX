const XLSX = require('xlsx')
class ExcelWriter {

    excelToJson(fileLocation, sheetNumber, data){
        let workbook = XLSX.readFile(fileLocation)

        let ws = XLSX.utils.json_to_sheet(data)

        XLSX.writeFile(workbook, fileLocation)

        // return excelData
    }
}
export default new ExcelWriter();