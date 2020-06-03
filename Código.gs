function form_number_1() { 
var form = FormApp.create("Ingreso a Edificio"); 
var laurl=form.getPublishedUrl(); 
Logger.log(laurl); 
var guardar = SpreadsheetApp.create('Ingreso a Edificio');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


var form = FormApp.openById(form.getId());
var item = form.addTextItem()
.setRequired(true)
.setTitle("Nombre Completo");


var form = FormApp.openById(form.getId());
var item = form.addTextItem()
.setRequired(true)
.setTitle("Nivel y Oficina");


var form = FormApp.openById(form.getId());
var item = form.addTextItem()
.setRequired(true)
.setTitle("Con quién se dirige");


var form = FormApp.openById(form.getId());
var item = form.addDateItem() //
.setRequired(true) //
item.setTitle("Fecha");


var form = FormApp.openById(form.getId());
var item = form.addTimeItem()
.setRequired(true)
.setTitle("Hora de Entrada");


var form = FormApp.openById(form.getId());
var item = form.addListItem(); //
item.setTitle("Registró")
.setChoices([item.createChoice('Fernando'),
item.createChoice('Julio'),
item.createChoice('Alberto')]);
}









