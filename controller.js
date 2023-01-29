var CSVQuestionViewModel = function()
{
	CSVQuestionViewModel.currentAnswer = ko.observable('');
	CSVQuestionViewModel.currentQuestion = ko.observable('');
	CSVQuestionViewModel.State = ko.observable('')
	CSVQuestionViewModel.QuestionCounter = ko.observable(0);
	CSVQuestionViewModel.DisplayQuestionCounter = ko.observable(false);
	CSVQuestionViewModel.ShowCenterButtons = ko.observable(false);
	CSVQuestionViewModel.ShowNextButton = ko.observable(false);
	CSVQuestionViewModel.DisplayQuestion = ko.observable(false);
	CSVQuestionViewModel.DisplayAnswer = ko.observable(false);
	CSVQuestionViewModel.DisplayCard = ko.observable(false);
	CSVQuestionViewModel.questions = ko.observableArray();
	
};

function GetRandomQuestion()
{
	var length=CSVQuestionViewModel.questions().length;
	var q = CSVQuestionViewModel.questions()[Math.floor( Math.random()*length ) ];
	CSVQuestionViewModel.currentQuestion('Q: '+q.question);
	CSVQuestionViewModel.currentAnswer('A: '+q.answer);
	
	RemoveQuestion(q);
}

function RemoveQuestion(q)
{
	CSVQuestionViewModel.questions.remove(q);
	CSVQuestionViewModel.QuestionCounter(CSVQuestionViewModel.questions().length);
}

function NextQuestion()
{
	CSVQuestionViewModel.currentQuestion('');
	CSVQuestionViewModel.currentAnswer('');
	
	if(CSVQuestionViewModel.questions().length > 0)
	{
		GetRandomQuestion();
	}
	else
	{
		CSVQuestionViewModel.State('OutOfQuestions');
		CSVQuestionViewModel.currentQuestion('Out of Questions');
		//CSVQuestionViewModel.DisplayAnswer(false);
	}

	CSVQuestionViewModel.DisplayAnswer(false);

	if(!CSVQuestionViewModel.ShowNextButton())
	{
		CSVQuestionViewModel.ShowNextButton(true);
	}
	
	CSVQuestionViewModel.State('QuestionLoaded');
}

function AnswerQuestion()
{
		CSVQuestionViewModel.DisplayAnswer(true);
		CSVQuestionViewModel.State('Answered');
}

function GetNext()
{
	switch(CSVQuestionViewModel.State())
	{
		case '': 
		CSVQuestionViewModel.ShowCenterButtons(false);
		CSVQuestionViewModel.DisplayCard(false);
		CSVQuestionViewModel.DisplayQuestionCounter(false);
		break;
		case 'QuestionLoaded':
		AnswerQuestion();
		break;
		case 'Answered':
		case 'FileLoaded':
		NextQuestion();
		break;
		case 'OutOfQuestions':
		break;
		deafault: break;
	}
}

function ClearQuestions()
{
	CSVQuestionViewModel.ShowCenterButtons(false);
	CSVQuestionViewModel.questions=ko.observableArray();
	CSVQuestionViewModel.State('');
}

function clearOutput()
{
   /*     $("#out").html("");
       data_string=""; */
}


function process()
{
	ClearQuestions();
	run_file(doc,0,doc.length);
	
	CSVQuestionViewModel.ShowCenterButtons(true);
	CSVQuestionViewModel.DisplayCard(true);
	CSVQuestionViewModel.currentQuestion("File Loaded");
	CSVQuestionViewModel.DisplayQuestion(true);
	CSVQuestionViewModel.ShowNextButton (true);
	CSVQuestionViewModel.State('FileLoaded');
	CSVQuestionViewModel.DisplayQuestionCounter(true);
	CSVQuestionViewModel.QuestionCounter(CSVQuestionViewModel.questions().length);
}

function run_file(doc,start, end)
{
	
	
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
			CSVQuestionViewModel.questions.push(question);
		}
		
	}
	
}


$(document).ready(function(){
	var doc;
	 ko.applyBindings(new CSVQuestionViewModel() );
});
