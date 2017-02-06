function make_red()
{
	console.log('hi');
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
	$('#red').addEventListener('click', make_red);
	$('#green').addEventListener('click', make_green);
	$('#blue').addEventListener('click', make_blue);
	$('#yellow').addEventListener('click', make_yellow);
	$('#reset').addEventListener('click', reset);
}
