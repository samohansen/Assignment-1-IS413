
/*
 Build a JavaScript program that calculates and displays both a final percentage and a letter grade using the 
 "Grade Calculator" form entries based on the weights listed in the syllabus.
*/

$("#submitButton").click(function () {
    var iAssign = $("#assignments").val();
    var iGroup = $("#groupproj").val();
    var iQuiz = $("#quiz").val();
    var iExam = $("#exam").val();
    var iIntex = $("#intex").val();


    // Calculate the final grade by multiplying the grade by the weights:
    var iAssignWeighted = iAssign * .5;
    var iGroupWeighted = iGroup * .1;
    var iQuizWeighted = iQuiz * .1;
    var iExamWeighted = iExam * .2;
    var iIntexWeighted = iIntex * .1;
    var iTotalGrade = iAssignWeighted + iGroupWeighted + iQuizWeighted + iExamWeighted + iIntexWeighted;

    // Assign letter grade:

    var sLetterGrade = "";
    if (iTotalGrade >= 94) {
        sLetterGrade = "an A!"
    }
    else if (iTotalGrade >= 90) {
        sLetterGrade = "an A-"
    }
    else if (iTotalGrade >= 87) {
        sLetterGrade = "a B+"
    }
    else if (iTotalGrade >= 84) {
        sLetterGrade = "a B"
    }
    else if (iTotalGrade >= 80) {
        sLetterGrade = "a B-"
    }
    else if (iTotalGrade >= 77) {
        sLetterGrade = "a C+"
    }
    else if (iTotalGrade >= 74) {
        sLetterGrade = "a C"
    }
    else if (iTotalGrade >= 70) {
        sLetterGrade = "a C-"
    }
    else if (iTotalGrade >= 67) {
        sLetterGrade = "a D+"
    }
    else if (iTotalGrade >= 64) {
        sLetterGrade = "a D"
    }
    else if (iTotalGrade >= 60) {
        sLetterGrade = "a D-"
    }
    else {
        sLetterGrade = "an E. :("
    }


    // Alert final Grade:

    alert("Your calculated final grade in this course is: " + iTotalGrade.toFixed(2) + "%. Earning you: " + sLetterGrade);


});

//function gradeCalc() {
//    var iAssign = $("#assignments").val();
//    var iGroup = $("#groupproj").val();
//    var iQuiz = $("#quiz").val();
//    var iExam = $("#exam").val();
//    var iIntex = $("#intex").val();


//    // Calculate the final grade by multiplying the grade by the weights:
//    var iAssignWeighted = iAssign * .5;
//    var iGroupWeighted = iGroup * .1;
//    var iQuizWeighted = iQuiz * .1;
//    var iExamWeighted = iExam * .2;
//    var iIntexWeighted = iIntex * .1;
//    var iTotalGrade = iAssignWeighted + iGroupWeighted + iQuizWeighted + iExamWeighted + iIntexWeighted;

//    // Assign letter grade:

//    var sLetterGrade = "";
//    if (iTotalGrade >= 94) {
//        sLetterGrade = "an A!"
//    }
//    else if (iTotalGrade >= 90) {
//        sLetterGrade = "an A-"
//    }
//    else if (iTotalGrade >= 87) {
//        sLetterGrade = "a B+"
//    }
//    else if (iTotalGrade >= 84) {
//        sLetterGrade = "a B"
//    }
//    else if (iTotalGrade >= 80) {
//        sLetterGrade = "a B-"
//    }
//    else if (iTotalGrade >= 77) {
//        sLetterGrade = "a C+"
//    }
//    else if (iTotalGrade >= 74) {
//        sLetterGrade = "a C"
//    }
//    else if (iTotalGrade >= 70) {
//        sLetterGrade = "a C-"
//    }
//    else if (iTotalGrade >= 67) {
//        sLetterGrade = "a D+"
//    }
//    else if (iTotalGrade >= 64) {
//        sLetterGrade = "a D"
//    }
//    else if (iTotalGrade >= 60) {
//        sLetterGrade = "a D-"
//    }
//    else {
//        sLetterGrade = "an E. :("
//    }


//    // Alert final Grade:

//    alert("Your calculated final grade in this course is: " + iTotalGrade.toFixed(2) + "%. Earning you: " + sLetterGrade);
//}


