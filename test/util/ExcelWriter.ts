const XLSX = require('xlsx')
class ExcelWriter {

    excelToJson( sheetNumber){//jsontoexcel

        let fileLocation = './test/testdata/TestDataWrite.xlsx'
        let workbook = XLSX.readFile(fileLocation)

        let data = [{"name":"tester", "age":30, "car":"sss"}]

        workbook.Sheets[sheetNumber] = XLSX.utils.json_to_sheet(data);

        XLSX.writeFile(workbook, fileLocation)

        // return excelData
    }
}
export default new ExcelWriter();