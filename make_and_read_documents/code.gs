function createDocument() {
  var doc = DocumentApp.create('new Document')
  var body = doc.getBody()
  body.appendParagraph('hello\nword')
}

function openDocument(){
  var doc = DocumentApp.openById('1j6T1O3EEZeq6PjjmMtqiLBgFyl_NZgbBte2LByNI6ZY')
  doc.getBody().appendParagraph('my new line of paragraph')
}

function editParagraph(){
  var doc = DocumentApp.openById('1j6T1O3EEZeq6PjjmMtqiLBgFyl_NZgbBte2LByNI6ZY')
  var paragraphs = doc.getBody().getParagraphs()

  paragraphs[1].setText('NEW edit text')
}

function editFormat(){
  var doc = DocumentApp.openById('1j6T1O3EEZeq6PjjmMtqiLBgFyl_NZgbBte2LByNI6ZY')
  var paragraphs = doc.getBody().getParagraphs()

  //def atrubutes
  var style1 = {}
  style1[DocumentApp.Attribute.BACKGROUND_COLOR] = '#ffea82'
  style1[DocumentApp.Attribute.FONT_SIZE] = 22

  paragraphs[0].setAttributes(style1)

  //other way

  paragraphs[2].setAttributes({
    BACKGROUND_COLOR: '#444444',
    FOREGROUND_COLOR: '#999999'
  })
}

function analistParagraphs(){
  var doc = DocumentApp.openById('1j6T1O3EEZeq6PjjmMtqiLBgFyl_NZgbBte2LByNI6ZY')

  var body = doc.getBody()
  var paragraphs = body.getParagraphs()

  for(var i = 0;i<paragraphs.length;i++){
    var textParagraph = paragraphs[i].getText();
    if (textParagraph == 'editme'){
      Logger.log('finding '+ textParagraph)
      paragraphs[i].setText('edited')
      paragraphs[i].setAttributes({BACKGROUND_COLOR: '#EEEEEE'})
    }
  }
}

function listAtributes(){
   var doc = DocumentApp.openById('1j6T1O3EEZeq6PjjmMtqiLBgFyl_NZgbBte2LByNI6ZY')

  var body = doc.getBody()
  var paragraphs = body.getParagraphs()

  for (var paragraph in paragraphs){
    Logger.log(paragraphs[paragraph].getText())
    var attributes = paragraphs[paragraph].getAttributes()

    for (var attribute in attributes){
      Logger.log('Attribute '+ attribute + ': ' + attributes[attribute])

      if (attribute == 'BOLD' && attributes[attribute]== true){
        paragraphs[paragraph].setAttributes({BOLD:false})
      }
    }
  }
}