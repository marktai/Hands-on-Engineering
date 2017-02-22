function make_red()
{
	chrome.tabs.executeScript(null, {
		code: 'document.getElementsByTagName("Body")[0].style.backgroundColor = "red"'
	});
}
function make_green()
{
	chrome.tabs.executeScript(null, {
		code: 'document.getElementsByTagName("Body")[0].style.backgroundColor = "green"'
	});
}
function make_blue()
{
	chrome.tabs.executeScript(null, {
		code: 'document.getElementsByTagName("Body")[0].style.backgroundColor = "blue"'
	});
}
function make_yellow()
{
	chrome.tabs.executeScript(null, {
		code: 'document.getElementsByTagName("Body")[0].style.backgroundColor = "yellow"'
	});
}
function reset()
{
	chrome.tabs.executeScript(null, {
		code: 'document.getElementsByTagName("Body")[0].style.backgroundColor = "white"'
	});
}
window.onload = function(){
	document.getElementById('red').addEventListener('click', make_red);
	document.getElementById('green').addEventListener('click', make_green);
	document.getElementById('blue').addEventListener('click', make_blue);
	document.getElementById('yellow').addEventListener('click', make_yellow);
	document.getElementById('reset').addEventListener('click', reset);
}
