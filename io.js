var data_string="";
var doc;


window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('out');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			//var textType = /text.*/;
			var textType = /.*/

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					 doc=reader.result.split('\n');
 					
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
};

function print(text)
{
	//gets the top of the stack and prints italics
	var r=$("#out");
	r.html(r.html()+text+"<p>");
	data_string+=top+"\n";
}

function show(cont)
{
	//gets the top of the stack and prints italics
	var r=$("#out");
	r.html(r.html()+cont+"<p>");
	data_string+=cont+"\n";
	
}

function clearOutput()
{
	$("#out").html("");
	data_string="";
}

