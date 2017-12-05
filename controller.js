var questions=[];


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
	return questions[Math.floor(Math.random()*length)];

}

function NextQuestion()
{
	var output=""
	var q=GetRandomQuestion();
	output="Q: "+ q.question+ "\nA: "+q.answer;
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
	for(var i=start;i<end;i++)
	{
		doc[i]=doc[i].trim();
		var args=doc[i].split(","); //split up the line on commas
		
		var question=
		{
			answer:args[0],
			questions:args[1]
			
		};
		
		PushQuestion(question);
		
	}
}
