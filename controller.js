<<<<<<< Updated upstream
var questions=[];
var current_question="";
var current_answer="";

$(document).ready(function(){
=======
var QuestionViewModel = function()
{
	QuestionViewModel.english = ko.observable('');
  QuestionViewModel.romanji = ko.observable('');
	QuestionViewModel.japanese = ko.observable('');
  QuestionViewModel.category = ko.observable('');
	QuestionViewModel.State = ko.observable('');
	QuestionViewModel.QuestionCounter = ko.observable(0);
	QuestionViewModel.DisplayQuestionCounter = ko.observable(false);
	QuestionViewModel.ShowCenterButtons = ko.observable(false);
	QuestionViewModel.ShowNextButton = ko.observable(false);
	QuestionViewModel.ShowReloadButton = ko.observable(false);
	QuestionViewModel.DisplayJapanese = ko.observable(true);
	QuestionViewModel.DisplayEnglish = ko.observable(false);
  QuestionViewModel.DisplayRomanji = false;
  QuestionViewModel.DisplayRomanjiQ = ko.observable(false);
  QuestionViewModel.DisplayRomanjiA = ko.observable(false);
  QuestionViewModel.DisplayCategory = ko.observable(true);
	QuestionViewModel.DisplayCard = ko.observable(true);
	QuestionViewModel.questions = ko.observableArray();
	QuestionViewModel.removedQuestions = ko.observableArray();
  QuestionViewModel.externalQuestions = ko.observableArray();
  
  QuestionViewModel.EnableHiragana = ko.observable(true);
  QuestionViewModel.EnableHiraganaDakuten = ko.observable(true);
  QuestionViewModel.EnableHiraganaHandakuten = ko.observable(true);
  QuestionViewModel.EnableKatakanaDakuten = ko.observable(true);
  QuestionViewModel.EnableKatakanaHandakuten = ko.observable(true);
  QuestionViewModel.EnableKatakana = ko.observable(true);
  QuestionViewModel.EnableKanji = ko.observable(true);
  QuestionViewModel.EnableHiraganaNumbers = ko.observable(true);
  QuestionViewModel.EnableWords = ko.observable(false);
  QuestionViewModel.EnablePhrases = ko.observable(false);
  QuestionViewModel.EnableFileLoadedQuestions = ko.observable(true);
  
  QuestionViewModel.chkHiragana = ko.observable(true);
  QuestionViewModel.chkHiraganaDakuten = ko.observable(true);
  QuestionViewModel.chkHiraganaHandakuten = ko.observable(true);
  QuestionViewModel.chkKatakana = ko.observable(false);
  QuestionViewModel.chkKatakanaDakuten = ko.observable(false);
  QuestionViewModel.chkKatakanaHandakuten = ko.observable(false);
  QuestionViewModel.chkKanji = ko.observable(false);
  QuestionViewModel.chkHiraganaNumbers = ko.observable(true);
  QuestionViewModel.chkWords = ko.observable(false);
  QuestionViewModel.chkPhrases = ko.observable(false);
  QuestionViewModel.chkCategory = ko.observable(true);
  QuestionViewModel.chkRomanji = ko.observable(false);
  QuestionViewModel.chkQuestionCounter = ko.observable(false);
  QuestionViewModel.chkRepeatQuestions = ko.observable(true);
  QuestionViewModel.chkJapaneseToEnglish = ko.observable(true);
  QuestionViewModel.chkRandomNumber = ko.observable(false);
  QuestionViewModel.chkFileLoadedQuestions = ko.observable(true);
  
  QuestionViewModel.savedOptions = [];
>>>>>>> Stashed changes
	
});

function PushQuestion( question )
{
	//pushes a new questions object
	questions.push(question);

}


//=========================================
//    U.I. CONTROLS
//========================================

function checkBoxChangePreloadedQuestion()
{
<<<<<<< Updated upstream
	//gets a random question

	var length=questions.length;
	var q = questions[Math.floor( Math.random()*length ) ];
	current_question=q.question;
	current_answer=q.answer;
=======
    var currentQuestion = 
      {
        japanese: QuestionViewModel.japanese(),
        english: QuestionViewModel.english(),
        romanji: QuestionViewModel.romanji(),
        category: QuestionViewModel.category(),
        showAnswer: QuestionViewModel.DisplayEnglish(),
        questionState: QuestionViewModel.State()
      };
    
  MapQuestions();    
  //process();

    QuestionViewModel.japanese(currentQuestion.japanese);
    QuestionViewModel.english(currentQuestion.english);
    QuestionViewModel.romanji(currentQuestion.romanji);
    QuestionViewModel.category(currentQuestion.category);
    QuestionViewModel.DisplayEnglish(currentQuestion.showAnswer);
    QuestionViewModel.State(currentQuestion.questionState);
  
    checkBoxChangeDisplay();
    
}

function checkBoxChangeOptions(category)
{
    process();
    checkBoxChangeDisplay();
>>>>>>> Stashed changes
}

function checkBoxChangeDisplay()
{
<<<<<<< Updated upstream
	clearOutput();
	var output=""
	GetRandomQuestion();

	output="Q: "+ current_question+"<p>";
	print(output);
	
=======
 QuestionViewModel.DisplayCategory(QuestionViewModel.chkCategory());
 SetRomanjiVisibility();
 QuestionViewModel.DisplayQuestionCounter(!QuestionViewModel.chkRepeatQuestions());
  
}

function toggleRandomNumber()
{
    if(QuestionViewModel.chkRandomNumber())
    {
      SaveSettings();
      QuestionViewModel.chkHiragana(false);
      QuestionViewModel.chkHiraganaDakuten(false);
      QuestionViewModel.chkHiraganaHandakuten(false);
      QuestionViewModel.chkKatakanaDakuten(false);
      QuestionViewModel.chkKatakanaHandakuten(false);
      QuestionViewModel.chkKatakana(false);
      QuestionViewModel.chkKanji(false);
      QuestionViewModel.chkHiraganaNumbers(false);
      QuestionViewModel.chkWords(false);
      QuestionViewModel.chkPhrases(false);
      QuestionViewModel.chkFileLoadedQuestions(false);
      
      QuestionViewModel.EnableHiragana(false);
      QuestionViewModel.EnableKatakana(false);
      QuestionViewModel.EnableKanji(false);
      QuestionViewModel.EnableHiraganaNumbers(false);
      QuestionViewModel.EnableWords(false);
      QuestionViewModel.EnablePhrases(false);
      QuestionViewModel.EnableFileLoadedQuestions(false);
     
    }
  else
    {
      QuestionViewModel.EnableHiragana(true);
      QuestionViewModel.EnableHiraganaDakuten(true);
      QuestionViewModel.EnableHiraganaHandakuten(true);
      QuestionViewModel.EnableKatakanaDakuten(true);
      QuestionViewModel.EnableKatakanaHandakuten(true);
      QuestionViewModel.EnableKatakana(true);
      QuestionViewModel.EnableKanji(true);
      QuestionViewModel.EnableHiraganaNumbers(true);
      QuestionViewModel.EnableWords(true);
      QuestionViewModel.EnablePhrases(true);
      QuestionViewModel.EnableFileLoadedQuestions(true);
      
      restoreSettings();
      QuestionViewModel.savedValues=[];
    }
}

function restoreSettings()
{
   if(hasValue("hiragana"))
        {
           QuestionViewModel.chkHiragana(true);
        }
      
          if(hasValue("hiraganadakuten"))
        {
           QuestionViewModel.chkHiraganaDakuten(true);
        }
      
          if(hasValue("hiraganahandakuten"))
        {
           QuestionViewModel.chkHiraganaHandakuten(true);
        }
      
         if(hasValue("katkanadakuten"))
        {
           QuestionViewModel.chkKatakanaDakuten(true);
        }
      
          if(hasValue("katakanahandakuten"))
        {
           QuestionViewModel.chkKatakanaHandakuten(true);
        }
      
      if(hasValue("katakana"))
        {
           QuestionViewModel.chkKatakana(true);
        }
      
      if(hasValue("kanji"))
        {
           QuestionViewModel.chkKanji(true);
        }
      
      if(hasValue("hiragananumbers"))
        {
           QuestionViewModel.chkHiraganaNumbers(true);
        }

      if(hasValue("words"))
        {
           QuestionViewModel.chkWords(true);
        }
      
           
      if(hasValue("phrases"))
        {
           QuestionViewModel.chkPhrases(true);
        }
     
        if(hasValue("fileloadedquestions"))
          {
            QuestionViewModel.chkFileLoadedQuestions(true);
          }
}

function SaveSettings()
{
   if(QuestionViewModel.chkHiragana())
      { QuestionViewModel.savedOptions.push("hiragana"); }
      
           if(QuestionViewModel.chkHiraganaDakuten())
      { QuestionViewModel.savedOptions.push("hiraganadakuten"); }
      
           if(QuestionViewModel.chkHiraganaHandakuten())
      { QuestionViewModel.savedOptions.push("hiraganahandakuten"); }
      
             if(QuestionViewModel.chkKatakanaDakuten())
      { QuestionViewModel.savedOptions.push("katakanadakuten"); }
      
           if(QuestionViewModel.chkKatakanaHandakuten())
      { QuestionViewModel.savedOptions.push("katakanahandakuten"); }
      
            if(QuestionViewModel.chkKatakana())
      { QuestionViewModel.savedOptions.push("katakana"); }
      
            if(QuestionViewModel.chkKanji())
      { QuestionViewModel.savedOptions.push("kanji"); }
      
            if(QuestionViewModel.chkHiraganaNumbers())
      { QuestionViewModel.savedOptions.push("hiragananumbers"); }
      
            if(QuestionViewModel.chkWords())
      { QuestionViewModel.savedOptions.push("words"); }
      
            if(QuestionViewModel.chkPhrases())
      { QuestionViewModel.savedOptions.push("phrases"); }
      
      if(QuestionViewModel.chkFileLoadedQuestions())
        { QuestionViewModel.savedOptions.push("fileloadedquestions");}
}

function setDefaultSettings()
{
    QuestionViewModel.EnableHiragana(true);
  QuestionViewModel.EnableHiraganaDakuten(true);
  QuestionViewModel.EnableHiraganaHandakuten(true);
    QuestionViewModel.EnableKatakana(true);
   QuestionViewModel.EnableKatakanaDakuten(true);
  QuestionViewModel.EnableKatakanaHandakuten(true);
    QuestionViewModel.EnableKanji(true);
    QuestionViewModel.EnableHiraganaNumbers(true);
    QuestionViewModel.EnableWords(true);
    QuestionViewModel.EnablePhrases(true);
      
    QuestionViewModel.chkHiragana(false);
  QuestionViewModel.chkHiraganaDakuten(false);
  QuestionViewModel.chkHiraganaHandakuten(false);
    QuestionViewModel.chkKatakana(false);
    QuestionViewModel.chkKatakanaDakuten(false);
  QuestionViewModel.chkKatakanaHandakuten(false);
    QuestionViewModel.chkKanji(false);
    QuestionViewModel.chkHiraganaNumbers(false);
    QuestionViewModel.chkWords(false);
    QuestionViewModel.chkPhrases(false);
  
    QuestionViewModel.chkHiragana(true);
    QuestionViewModel.chkiraganaNumbers(true);
}

function hasValue(chkValue)
{
  return QuestionViewModel.savedOptions.includes(chkValue,0);  
}

//Visibility Functions
/* function ClearQuestions()
{
	QuestionViewModel.ShowCenterButtons(false);
	QuestionViewModel.questions=ko.observableArray();
	QuestionViewModel.State('');
}
*/
function clearOutput()
{
    QuestionViewModel.State('');
    QuestionViewModel.ShowCenterButtons(false);
    QuestionViewModel.DisplayCard(false);
    QuestionViewModel.DisplayQuestionCounter(false);
    QuestionViewModel.questions = ko.observableArray();
>>>>>>> Stashed changes
}

function GetAnswer()
{
<<<<<<< Updated upstream
	clearOutput();
	var output="Q: "+ current_question+"<p>A: "+current_answer+"<p>";
	print(output);
	
=======
		QuestionViewModel.DisplayEnglish(true);
		QuestionViewModel.State('Answered');
}

function GetNext()
{
	switch(QuestionViewModel.State())
	{
		case '': 
		QuestionViewModel.ShowCenterButtons(false);
		QuestionViewModel.DisplayCard(false);
		QuestionViewModel.DisplayQuestionCounter(false);
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
  
   QuestionViewModel.DisplayCategory(QuestionViewModel.chkCategory());
   SetRomanjiVisibility();
>>>>>>> Stashed changes
}

function SetRomanjiVisibility()
{
<<<<<<< Updated upstream
	
	questions=[];
}
=======
  if(QuestionViewModel.chkRomanji())
  {
     QuestionViewModel.DisplayRomanjiQ
     (QuestionViewModel.chkJapaneseToEnglish());
     QuestionViewModel.DisplayRomanjiA
     (!QuestionViewModel.chkJapaneseToEnglish());
  }
}

function process() //rename me please
{
	QuestionViewModel.ShowCenterButtons(true);
	QuestionViewModel.DisplayCard(true);
	QuestionViewModel.category("Ready: Hit Next to Start!");
	QuestionViewModel.DisplayJapanese(true);
  SetRomanjiVisibility();
	QuestionViewModel.DisplayEnglish(false);
  QuestionViewModel.DisplayCategory(true);
	QuestionViewModel.ShowNextButton (true);  
  QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	QuestionViewModel.State('FileLoaded');
  
}
//=========================================
//    U.I. CONTROLS
//========================================

//=============================================
//    QUESTION CONTROLS
//=============================================
function RemoveQuestion(q)
{
	QuestionViewModel.questions.remove(q);
	QuestionViewModel.removedQuestions.push(q);
	QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
}

function GetRandomQuestion()
{
  if(QuestionViewModel.chkRandomNumber())
{
  getRandomNumberQuestion();
} 
  else
    {
	var length=QuestionViewModel.questions().length;
	var q = QuestionViewModel.questions()[Math.floor( Math.random()*length ) ];
	QuestionViewModel.japanese(q.japanese);
  
    if(typeof q.romanji==='undefined' || q.romanji == '')
    {
        QuestionViewModel.romanji('');
    }
    else
    {
       QuestionViewModel.romanji(' ('+q.romanji+')');
    }
   
	QuestionViewModel.english(q.english);
  QuestionViewModel.category(q.category);
  
  if(!QuestionViewModel.chkRepeatQuestions())
  {
    RemoveQuestion(q);
  }	
    }
}

function getRandomNumberQuestion()
{
  var magnitude = Math.floor(Math.random()*4);
  var number = 0;
  if(magnitude==0)
    {
      number = Math.floor(Math.random()*100);
      QuestionViewModel.category("(small) number");
    }
  else if(magnitude==1)
    {
      number = Math.floor(Math.random()*1000);
      QuestionViewModel.category("(medium) number");
    }
  else if(magnitude==2)
    {
      number = Math.floor(Math.random()*10000);
      QuestionViewModel.category("(large) number");
    }
  else if(magnitude==3)
    {
      number = Math.floor(Math.random()*100000);
      QuestionViewModel.category("(larger) number");
    }
  else 
    {
        QuestionViewModel.category("failed to get number -- "+magnitude);
    }
  
  calculateNumberInJapanese(number);
  QuestionViewModel.japanese(number);
  
}

function calculateNumberInJapanese(number)
{
  
    var ones = Math.floor(number % 10);
    var tens = Math.floor(number/10 % 10);
    var hundreds = Math.floor(number/100 % 10);
    var thousands = Math.floor(number/1000 % 10);
    var tenThousands = Math.floor(number / 10000 % 10);
  
    var answer = '';
  if(tenThousands>0)
     {
         switch(tenThousands)
       {
         case 1: answer+= 'ichiman '; break;
         case 2: answer+= 'niman '; break;
         case 3: answer+= 'sanman '; break;
         case 4: answer+= 'yonman '; break;
         case 5: answer+= 'goman '; break;
         case 6: answer+= 'rokkuman '; break;
         case 7: answer+= 'nanaman '; break;
         case 8: answer+= 'hachiman '; break;
         case 9: answer+= 'kyuman '; break;
       }
     }
  
   if(thousands>0)
     {
         switch(thousands)
       {
         case 1: answer+= 'sen '; break;
         case 2:  answer+= 'nisen '; break;
         case 3:  answer+= 'sanzen '; break;
         case 4: answer+=  'yonsen '; break;
         case 5:  answer+= 'gosen '; break;
         case 6:  answer+= 'rokusen '; break;
         case 7:  answer+= 'nanasen '; break;
         case 8:  answer+= 'hasssen '; break;
         case 9:  answer+= 'kyuusen '; break;
       };
     }
  
     if(hundreds>0)
     {
         switch(hundreds)
       {
         case 1: answer+=  'hyaku '; break;
         case 2: answer+=  'nihyaku '; break;
         case 3: answer+=  'sanbyaku '; break;
         case 4: answer+=  'yonhyaku '; break;
         case 5: answer+=  'gohyaku '; break;
         case 6: answer+=  'roppyaku '; break;
         case 7: answer+=  'nanahyaku '; break;
         case 8: answer+=  'happyaku '; break;
         case 9: answer+=  'kyuuhyaku '; break;
       };
     }
  
       if(tens>0)
     {
         switch(tens)
       {
         case 1: answer+=  'ju '; break;
         case 2: answer+=  'niju '; break;
         case 3:  answer+= 'sanju '; break;
         case 4: answer+=  'yonju '; break;
         case 5: answer+=  'goku '; break;
         case 6: answer+=  'rokuju '; break;
         case 7: answer+=  'nanaju '; break;
         case 8: answer+=  'hachiju '; break;
         case 9: answer+=  'kyuuju '; break;
       };
     }
  
         if(ones>0)
     {
         switch(ones)
       {
         case 1: answer+=  'ichi'; break;
         case 2: answer+=  'ni'; break;
         case 3: answer+=  'san'; break;
         case 4: answer+=  'yon'; break;
         case 5: answer+=  'go'; break;
         case 6: answer+=  'roku'; break;
         case 7: answer+=  'nana'; break;
         case 8: answer+=  'hachi'; break;
         case 9: answer+=  'kyuu'; break;
       };
     }
  
    QuestionViewModel.english(answer);
}


function NextQuestion()
{
  
  var previousQuestion = 
      {
        	japanese: QuestionViewModel.japanese(),
          romanji: QuestionViewModel.romanji(),
          english: QuestionViewModel.english(),
          category: QuestionViewModel.category()
      };
  
	QuestionViewModel.japanese('');
  QuestionViewModel.romanji('');
	QuestionViewModel.english('');
  QuestionViewModel.category('');
	
	if(QuestionViewModel.questions().length > 0)
	{
    GetRandomQuestion();
    while(QuestionViewModel.japanese === previousQuestion.japanese)
    {
     GetRandomQuestion();
    }
	}
	else
	{
		QuestionViewModel.State('OutOfQuestions');
		QuestionViewModel.ShowReloadButton(true);
		QuestionViewModel.ShowNextButton(false);
		return;
	}

	QuestionViewModel.DisplayEnglish(false);

	if(!QuestionViewModel.ShowNextButton())
	{
		QuestionViewModel.ShowNextButton(true);
	}
	
	QuestionViewModel.State('QuestionLoaded');
}

function MapQuestions()
{
  if(QuestionViewModel.chkFileLoadedQuestions())
    {
      QuestionViewModel.questions = ko.observableArray();
      LoadStandardQuestions();
 
     
    for(let i=0; i<QuestionViewModel.externalQuestions().length; i++)
    {
      var question = QuestionViewModel.externalQuestions()[i];
        addQuestion(
          question["japanese"]
          ,question["romanji"]
          ,question["english"]
          ,question["category"]
        );
    }

   }
}

function ResetQuestions()
{
  //QuestionViewModel.questions = ko.observableArray();
  LoadStandardQuestions();
  MapQuestions();
}

function ReloadQuestions()
{
	QuestionViewModel.ShowReloadButton(true);
	//$.each(QuestionViewModel.removedQuestions(), function() { QuestionViewModel.questions.push(this); });
  LoadStandardQuestions();
	QuestionViewModel.removedQuestions = ko.observableArray(); QuestionViewModel.QuestionCounter(QuestionViewModel.questions().length);
	QuestionViewModel.State('FileLoaded');
	QuestionViewModel.japanese('Questions Reloaded');
	QuestionViewModel.ShowNextButton(true);
	QuestionViewModel.ShowReloadButton(false);
}



function LoadStandardQuestions()
{
    if(QuestionViewModel.chkHiraganaNumbers()) {addNumbers();}
    if(QuestionViewModel.chkHiragana()){ addHiragana();}
    if(QuestionViewModel.chkHiraganaDakuten()){ addHiraganaDakuten();}
    if(QuestionViewModel.chkHiraganaHandakuten()){ addHiraganaHandakuten();}
    if(QuestionViewModel.chkKatakana()){ addKatakana();}
    if(QuestionViewModel.chkKatakanaDakuten()){ addKatakanaDakuten();}
    if(QuestionViewModel.chkKatakanaHandakuten()){ addKatakanaHandakuten();}
    if(QuestionViewModel.chkKanji()){addKanji();}
    if(QuestionViewModel.chkWords()){addWords();}
    if(QuestionViewModel.chkPhrases()){addPhrases();}
};
>>>>>>> Stashed changes

function addQuestion(j,r,e,category='')
{
<<<<<<< Updated upstream
	//method that is called by pushing the run button
	run_file(doc,0,doc.length);
	
=======
  var question=
  {
    japanese: j,
      romanji: r,
    english: e,
    category: category
  };
  
  QuestionViewModel.questions.push(question);
>>>>>>> Stashed changes
}

//=============================================
//   END  QUESTION CONTROLS
//=============================================

//========================================
//  PRE-LOADED QEUESTIONS
//=====================================
function addNumbers()
{
<<<<<<< Updated upstream
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
=======
  addQuestion("いち","ichi","one","Number (Hiragana)");
  addQuestion("に","ni","two","Number (Hiragana)");
  addQuestion("さん","san","three","Number (Hiragana)");
  addQuestion("よん","yon","four","Number (Hiragana)");
}

function addHiragana()
{
  addQuestion('あ','','A','Hiragana');
  addQuestion('い','','I','Hiragana');
  addQuestion('う','','U','Hiragana');
  addQuestion('え','','E','Hiragana');
  addQuestion('お','','O','Hiragana');
  addQuestion('か','','Ka','Hiragana');
  addQuestion('き','','Ki','Hiragana');
  addQuestion('く','','Ku','Hiragana');
  addQuestion('け','','Ke','Hiragana');
  addQuestion('さ','','Sa','Hiragana');
  addQuestion('し','','Shi','Hiragana');
  addQuestion('す','','Su','Hiragana');
  addQuestion('せ','','Se','Hiragana');
  addQuestion('そ','','So','Hiragana');
  addQuestion('た','','Ta','Hiragana');
  addQuestion('ち','','Chi','Hiragana');
  addQuestion('つ','','Tsu','Hiragana');
  addQuestion('て','','Te','Hiragana');
  addQuestion('と','','To','Hiragana');
  addQuestion('な','','Na','Hiragana');
  addQuestion('に','','Ni','Hiragana');
  addQuestion('ぬ','','Nu','Hiragana');
  addQuestion('ね','','Ne','Hiragana');
  addQuestion('の','','No','Hiragana');
  addQuestion('は','','Ha','Hiragana');
  addQuestion('ひ','','Hi','Hiragana');
  addQuestion('ふ','','Fu','Hiragana');
  addQuestion('へ','','He','Hiragana');
  addQuestion('ほ','','Ho','Hiragana');
  addQuestion('ま','','Ma','Hiragana');
  addQuestion('み','','Mi','Hiragana');
  addQuestion('む','','Mu','Hiragana');
  addQuestion('め','','Me','Hiragana');
  addQuestion('も','','Mo','Hiragana');
  addQuestion('や','','Ya','Hiragana');
  //addQuestion('いい','','Ii','Hiragana');
  addQuestion('ゆ','','Yu','Hiragana');
  //addQuestion('いぇ','','I~e','Hiragana');
  addQuestion('よ','','Yo','Hiragana');
  addQuestion('ら','','Ra','Hiragana');
  addQuestion('り','','Ri','Hiragana');
  addQuestion('る','','Ru','Hiragana');
  addQuestion('れ','','Re','Hiragana');
  addQuestion('ろ','','Ro','Hiragana');
  addQuestion('わ','','Wa','Hiragana');
  //addQuestion('うぃ','','Wi','Hiragana');
  addQuestion('う','','U','Hiragana');
  //addQuestion('うぇ','','We','Hiragana');
  addQuestion('を','','O','Hiragana');
  addQuestion('ん','','N','Hiragana');
  
}

function addHiraganaDakuten()
{
  addQuestion('が','','Ga','Hiragana');
  addQuestion('ぎ','','Gi','Hiragana');
  addQuestion('ぐ','','Gu','Hiragana');
  addQuestion('げ','','Ge','Hiragana');
  addQuestion('ご','','Go','Hiragana');
  addQuestion('ざ','','Za','Hiragana');
  addQuestion('じ','','Ji','Hiragana');
  addQuestion('ず','','Zu','Hiragana');
  addQuestion('ぜ','','Ze','Hiragana');
  addQuestion('ぞ','','Zo','Hiragana');
  addQuestion('だ','','Da','Hiragana');
  addQuestion('ぢ','','Ji','Hiragana');
  addQuestion('づ','','Zu','Hiragana');
  addQuestion('で','','De','Hiragana');
  addQuestion('ど','','Do','Hiragana');
  addQuestion('ば','','Ba','Hiragana');
  addQuestion('び','','Bi','Hiragana');
  addQuestion('ぶ','','Bu','Hiragana');
  addQuestion('べ','','Be','Hiragana');
  addQuestion('ぼ','','Bo','Hiragana');
}

function addHiraganaHandakuten()
{
  addQuestion('ぱ','','Pa','Hiragana');
  addQuestion('ぴ','','Pi','Hiragana');
  addQuestion('ぷ','','Pu','Hiragana');
  addQuestion('ぺ','','Pe','Hiragana');
  addQuestion('ぽ','','Po','Hiragana');
}

function addKatakana()
{
  addQuestion('ア','','a','Katakana');
addQuestion('イ','','i','Katakana');
addQuestion('ウ','','u','Katakana');
addQuestion('エ','','e','Katakana');
addQuestion('オ','','o','Katakana');
addQuestion('カ','','ka','Katakana');
addQuestion('キ','','ki','Katakana');
addQuestion('ク','','ku','Katakana');
addQuestion('ケ','','ke','Katakana');
addQuestion('コ','','ko','Katakana');
addQuestion('サ','','sa','Katakana');
addQuestion('シ','','shi','Katakana');
addQuestion('ス','','su','Katakana');
addQuestion('セ','','se','Katakana');
addQuestion('ソ','','so','Katakana');
addQuestion('タ','','ta','Katakana');
addQuestion('チ','','chi','Katakana');
addQuestion('ツ','','tsu','Katakana');
addQuestion('テ','','te','Katakana');
addQuestion('ト','','to','Katakana');
addQuestion('ナ','','na','Katakana');
addQuestion('ニ','','ni','Katakana');
addQuestion('ヌ','','nu','Katakana');
addQuestion('ネ','','ne','Katakana');
addQuestion('ノ','','no','Katakana');
addQuestion('ハ','','ha','Katakana');
addQuestion('ヒ','','hi','Katakana');
addQuestion('フ','','fu','Katakana');
addQuestion('ヘ','','he','Katakana');
addQuestion('ホ','','ho','Katakana');
addQuestion('マ','','ma','Katakana');
addQuestion('ミ','','mi','Katakana');
addQuestion('ム','','mu','Katakana');
addQuestion('メ','','me','Katakana');
addQuestion('モ','','mo','Katakana');
addQuestion('ヤ','','ya','Katakana');
addQuestion('ユ','','yu','Katakana');
addQuestion('ヨ','','yo','Katakana');
addQuestion('ラ','','ra','Katakana');
addQuestion('リ','','ri','Katakana');
addQuestion('ル','','ru','Katakana');
addQuestion('レ','','re','Katakana');
addQuestion('ロ','','ro','Katakana');
addQuestion('ワ','','wa','Katakana');
addQuestion('ヲ','','wo','Katakana');
addQuestion('ン','','n','Katakana');
}

function addKatakanaDakuten()
{
   addQuestion('ガ','','Ga','Katakana');
addQuestion('ギ','','Gi','Katakana');

  addQuestion('グ','','Gu','Katakana');
addQuestion('ゲ','','Ge','Katakana');
addQuestion('ゴ','','Go','Katakana');
  
  addQuestion('ザ','','Za','Katakana');
addQuestion('ジ','','Ji','Katakana');
addQuestion('ズ','','Zu','Katakana');
addQuestion('ぜ','','Ze','Katakana');
addQuestion('ゾ','','Zo','Katakana');
  
  addQuestion('ダ','','Da','Katakana');
addQuestion('デ','','De','Katakana');
addQuestion('ド','','Do','Katakana');
  
  addQuestion('バ','','Ba','Katakana');
addQuestion('ビ','','Bi','Katakana');
addQuestion('ブ','','Bu','Katakana');
addQuestion('ベ','','Be','Katakana');

}

function addKatakanaHandakuten()
{
      addQuestion('パ','','Pa','Katakana');
addQuestion('ピ','','Pi','Katakana');
addQuestion('プ','','Pu','Katakana');
addQuestion('ペ','','Pe','Katakana');
addQuestion('ポ','','Po','Katakana');
}

function addKanji()
{
  addQuestion('一','ichi','one','Kanji');
  addQuestion('二','ni','two','Kanji');
  addQuestion('三','san','three','Kanji');
  
   addQuestion('四','yon','four','Kanji');
  addQuestion('五','go','five','Kanji');
  addQuestion('六','roku','six','Kanji');
  addQuestion('七','nana/shichi','seven','Kanji');
  addQuestion('八','hachi','eight','Kanji');
  addQuestion('九','kyuu','nine','Kanji');
  addQuestion('十','ju','ten','Kanji');
  
  addQuestion('半','han','-thirty (half past the hour)','Kanji');
  addQuestion('卵','tamago','egg','Kanji');
  addQuestion('山','yama','mountain','Kanji');
  addQuestion('中','naka','inside','Kanji');
  addQuestion('肉','niku','inside','Kanji');
  addQuestion('父','chichi','dad','Kanji');
  addQuestion('母','haha','mom','Kanji'); 
  addQuestion('百','tabe','eat','Kanji'); 
  addQuestion('千','hyaku','hundred','Kanji'); 
   addQuestion('千','sen','thousand','Kanji');
  addQuestion('万','man','ten-thousand','Kanji');
  addQuestion('円','','yen','Kanji');
  //addQuestion('木','yon','three','Kanji');
  //addQuestion('土','yon','three','Kanji');
  //addQuestion('金','yon','three','Kanji');
  //addQuestion('日','yon','three','Kanji');
  //addQuestion('月','yon','three','Kanji');
  addQuestion('彼 ','kare','He','Kanji');
addQuestion('今','ima','Now','Kanji');
  addQuestion('私','watashi','I','Kanji');
  addQuestion('家 ','ie','Home','Kanji');
}

//===============================================
//          END PRE-LOADED QUESTIONS
//===============================================

$(document).ready(function(){
  var doc;
	 ko.applyBindings(new QuestionViewModel() );
                   
   LoadStandardQuestions();
   process();
                  
});
>>>>>>> Stashed changes
