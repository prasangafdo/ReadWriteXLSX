const XLSX = require('xlsx')
class ExcelWriter {

    excelToJson( sheetNumber, data){//jsontoexcel

        // let fileLocation = './test/testdata/TestDataWrite.xlsx'
        // let workbook = XLSX.readFile(fileLocation)
        //
        // // let data = [{"name":"tester", "age":30, "car":"sss"}]
        //
        // workbook.Sheets[sheetNumber] = XLSX.utils.json_to_sheet(data);
        //
        // XLSX.writeFile(workbook, fileLocation)


        let fileLocation = './test/testdata/TestDataWrite.xlsx'

        const file = XLSX.readFile(fileLocation)

        const ws = XLSX.utils.json_to_sheet(data)

        XLSX.utils.book_append_sheet(file,ws,"Car")

// Writing to our file
        XLSX.writeFile(file,fileLocation)
    }
}
export default new ExcelWriter();