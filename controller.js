var CSVQuestionViewModel = function()
{
	CSVQuestionViewModel.currentAnswer = ko.observable('');
	CSVQuestionViewModel.currentQuestion = ko.observable('');
	CSVQuestionViewModel.questions = ko.observableArray();
	
};

function PushQuestion( question )
{
	//pushes a new questions object
	CSVQuestionViewModel.questions.push(question);

}

function GetRandomQuestion()
{
	//gets a random question

	var length=CSVQuestionViewModel.questions().length;
	var q = CSVQuestionViewModel.questions()[Math.floor( Math.random()*length ) ];
	CSVQuestionViewModel.currentQuestion(q.question);
	CSVQuestionViewModel.currentAnswer(q.answer);
}

function NextQuestion()
{
	clearOutput();
	var output=""
	GetRandomQuestion();

	output="Q: "+ CSVQuestionViewModel.currentQuestion()+"<p>";
	print(output);
	
}

function GetAnswer()
{
	clearOutput();
	var output="Q: "+ CSVQuestionViewModel.currentQuestion()+"<p>A: "+CSVQuestionViewModel.currentAnswer()+"<p>";
	print(output);
	
}

function ClearQuestions()
{
	CSVQuestionViewModel.questions=ko.observableArray();
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
		
		var ans="";
		
		for(var j=1; j<args.length; j++)
		{
			ans+=args[j];
		}
		
		var question=
		{
			answer:ans,
			question:args[0]
			
		};
		
		if(question.answer!=null && question.question!=null)
		{
			PushQuestion(question);
		}
		
	}
	
	print("file loaded");
}

$(document).ready(function(){
	 ko.applyBindings(new CSVQuestionViewModel() );
});
