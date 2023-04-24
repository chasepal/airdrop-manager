function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Run Script')
      .addItem('eth', 'runScript1')
      .addItem('bsc', 'runScript2')
      .addItem('op', 'runScript3')
      .addItem('arb', 'runScript4')
      .addItem('zks', 'runScript5')
      .addItem('starknet', 'runScript6')
      .addItem('main', 'runScript7')
      .addToUi();
}
function runScript1() {
  eth();
}
function runScript2() {
  bsc();
}
function runScript3() {
  op();
}
function runScript4() {
  arb();
}
function runScript5() {
  zks();
}
function runScript6() {
  starknet();
}
function runScript7() {
  main();
}
