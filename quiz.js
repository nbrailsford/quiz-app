// cant skip questions
// if incorrect on submission display correct answer
//see results at the end and able to start a new quiz/
//************************************************* */

//array of question and answers
const qandA = [
  [
    "Where is the Statue of Liberty Located?",
    "California",
    "France",
    "New York", // correct
    "Italy",
    "New York"
  ],
  [
    "Where is the Leaning Tower of Pisa?",
    "Dubai",
    "Ukraine",
    "Italy", // correct
    "Jordan",
    "Italy"
  ],
  [
    "What State is the Golden Gate Bridge Located?",
    "New York",
    "California", // correct
    "Flordia",
    "Washington",
    "California"
  ],
  [
    "Where is the Stonehenge located?",
    "United States",
    "Brazil",
    "Ireland",
    "England", // correct
    "England"
  ],
  [
    "Where is the Taj Mahal?",
    "Europe",
    "China",
    "India", // correct
    "United States",
    "India"
  ],
  [
    "Where is the Eiffel tower?",
    "Italy",
    "Dubai",
    "Spain",
    "France", // correct
    "France"
  ],
  [
    "Where is Christ the Redeemer located?",
    "France",
    "Brazil", // correct
    "Peru",
    "Chile",
    "Brazil"
  ],
  [
    "Where is St Basil's Cathedral?",
    "Russia", // correct
    "China",
    "India",
    "Ukraine",
    "Russia"
  ],
  [
    "Where is Petra located?",
    "Turkey",
    "Egypt",
    "India",
    "Jordan", // correct
    "Jordan"
  ]
];

// array of images src
const photos = [
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/US.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/pisa-italycopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/united-statescopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/Stonehenge-englandcopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/Tajmahal-indiacopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/paris-francecopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/brazilcopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/russiacopy.jpg",
  "/Users/nathanbrailsford/Desktop/bootcamp/projects/quiz-app/jordancopy.jpg"
];
// i is the current queston
let i = 0;

// render first page and hide others
$(function() {
  $(".main").hide();
  $(".feedBack").hide();
  $(".endScreen").hide();
  start();
});

// change page view to main
function start() {
  $(".startButton").click(function() {
    $(".startScreen").hide();
    $(".main").show();
    start_next();
  });
}

// render next question
function start_next() {
  $(".nextButton").click(function() {
    $(".feedBack").hide();
    $(".main").show();
    $(renderQuestions);
    $(".images").prop("src", photos[i]);
    $("#questionCount").html(i + 1);
  });
}

//render question to the screen
function renderQuestions() {
  $(".question").html(qandA[i][0]);
  $(".ans1").val(qandA[i][1]);
  $(".ans2").val(qandA[i][2]);
  $(".ans3").val(qandA[i][3]);
  $(".ans4").val(qandA[i][4]);
  $(start_next);
}

function score() {
  if (i === 10) {
    $(".main").hide();
    $(".feedBack").hide();
    $(".endScreen").show();
  } else {
    i++;
  }
}
// check if answer is correct and add 1 to correct/wrong;
let rightCount = 0;
let wrongCount = 0;
$(".guess").click(function() {
  $(".main").hide();
  $(".feedBack").show();
  if ($(this).val() === qandA[i][5]) {
    rightCount++;
    $(".title").text("Correct!");
    $(".right").html(rightCount);
  } else {
    wrongCount++;
    $(".title").text(`Sorry the correct answer was: ${qandA[i][5]}`);
    $(".wrong").html(wrongCount);
  }
  //   i++;
  $(score);
});