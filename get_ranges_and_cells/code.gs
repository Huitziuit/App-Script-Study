function getValueRange(){
  var main = SpreadsheetApp.openById('1eJRtSe54TPXOCRdk22CTU-eJa6flyJvdpaH8W4l7w8c')
  var sheet = main.getActiveSheet()
  var range_values = sheet.getRange(2,1).getValue() //ROW COLUMN
  Logger.log(range_values)
}

function getValueRangeVincul(){
  var main = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = main.getActiveSheet()
  var range_values = sheet.getRange(2,1,3,2).getValues() //ROW COLUMN  values return array
  Logger.log(range_values)
  Logger.log('select with google sintaxis '+ sheet.getRange('A2').getValue())
  Logger.log('select with google sintaxis '+ sheet.getRange('A2:B4').getValues())
}

function selectedRange(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  rangeList = sheet.getRangeList(['A2:B3'])
  rangeList.activate()  //selected in spreadsheet
}

function getSelection(){
  var selection = SpreadsheetApp.getSelection()
  Logger.log('Selection '+ selection)
  Logger.log('getCurrentCell '+ selection.getCurrentCell().getA1Notation())
  Logger.log('getCurrentRange '+ selection.getActiveRange().getA1Notation())
}

function getRanges(){
  var ranges = SpreadsheetApp.getSelection().getActiveRangeList().getRanges()
  for (var count=0;count<ranges.length;count++){
    Logger.log('RANGE '+ count + ' -> '+ ranges[count].getA1Notation())
  } 
}
