function onOpen(){
  DocumentApp.getUi().createMenu('Opciones adicionales')
  .addItem('add texts', 'showForm').addToUi()
}

function showForm() {
  var html = HtmlService.createHtmlOutputFromFile('form.html')
  .setWidth(1000)
  .setHeight(700)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME)

  DocumentApp.getUi().showModalDialog(html, "Formulario personalizado con App Script")
}

function makeText(text, num){
  var body = DocumentApp.getActiveDocument().getBody()
  for(var count = 0; count< num; count++){
    body.appendParagraph(text)
  }
}
