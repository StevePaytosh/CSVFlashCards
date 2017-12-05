var questions=[];
var current_question="";
var current_answer="";

$(document).ready(function(){
	
});

function PushQuestion( question )
{
	//pushes a new questions object
	questions.push(question);

}

function GetRandomQuestion()
{
	//gets a random question

	var length=questions.length;
	var q = questions[Math.floor( Math.random()*length ) ];
	current_question=q.question;
	current_answer=q.answer;
}

function NextQuestion()
{
	clearOutput();
	var output=""
	GetRandomQuestion();

	output="Q: "+ current_question+"<p>";
	print(output);
	
}

function GetAnswer()
{
	clearOutput();
	var output="Q: "+ current_question+"<p>A: "+current_answer+"<p>";
	print(output);
	
}

function ClearQuestions()
{
	
	questions=[];
}


function process()
{
	//method that is called by pushing the run button
	run_file(doc,0,doc.length);
	
}

function run_file(doc,start, end)
{
	ClearQuestions();
	
	for(var i=start;i<end;i++)
	{
		doc[i]=doc[i].trim();
		var args=doc[i].split(","); //split up the line on commas
		
		var question=
		{
			answer:args[0],
			question:args[1]
			
		};
		
		if(question.answer!=null && question.question!=null)
		{
			PushQuestion(question);
		}
		
	}
	
	print("file loaded");
}
