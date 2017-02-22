function make_red()
{
	chrome.tabs.executeScript(null, {
		code: '$("body").style.backgroundColor = "red"'
	});
}
function make_green()
{
	chrome.tabs.executeScript(null, {
		code: '$("body").style.backgroundColor = "green"'
	});
}
function make_blue()
{
	chrome.tabs.executeScript(null, {
		code: '$("body").style.backgroundColor = "blue"'
	});
}
function make_yellow()
{
	chrome.tabs.executeScript(null, {
		code: '$("body").style.backgroundColor = "yellow"'
	});
}
function reset()
{
	chrome.tabs.executeScript(null, {
		code: '$("body").style.backgroundColor = "white"'
	});
}
window.onload = function(){
	console.log('fwtw');
	$('#red').on('click', make_red);
	$('#green').on('click', make_green);
	$('#blue').on('click', make_blue);
	$('#yellow').on('click', make_yellow);
	$('#reset').on('click', reset);
}
