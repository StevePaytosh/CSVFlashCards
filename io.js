<<<<<<< Updated upstream
var data_string="";
var doc;


window.onload = function() {
=======
function run_file(doc,start, end)
{
	for(var i=start;i<end;i++)
	{
		doc[i]=doc[i].trim();
		var args=doc[i].split(","); //split up the line on commas
		var ans="";
    
    addQuestion(args[0],args[2],args[3],args[4]);
      var question=
      {
        japanese: args[0],
        romanji: args[2],
        english: args[3],
        category: args[4]
      };
    
    //add some validation please
		QuestionViewModel.externalQuestions.push(question);
		
		
	}
}

 window.onload = function() {
		
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

=======
}; 

function processFile()
{
	run_file(doc,0,doc.length);
  MapQuestions();
}
>>>>>>> Stashed changes
