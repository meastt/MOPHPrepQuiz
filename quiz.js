// Array of questions and answers
const quizQuestions = [
    {
        question: "What is the output of the following code?\n\nx = [10, [3.141, 20, [30, 'baz', 2.718]], 'foo']\nprint(x[1][2][1])",
        answers: {
            a: "30",
            b: "baz",
            c: "2.718",
            d: "Error"
        },
        correctAnswer: "b"
    },
    {
        question: "What data type is best for storing an ordered collection of unique items in Python?",
        answers: {
            a: "List",
            b: "Tuple",
            c: "Set",
            d: "Dictionary"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the use of the 'this' keyword in JavaScript?",
        answers: {
            a: "Refers to the current object",
            b: "Refers to the global object",
            c: "Always undefined",
            d: "Refers to the parent object"
        },
        correctAnswer: "a"
    },
    {
        question: "What will be the output of the following Python code?\n\nprint(2 ** 3 ** 2)",
        answers: {
            a: "64",
            b: "512",
            c: "16",
            d: "128"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you add a comment in a JavaScript code?",
        answers: {
            a: "<!--This is a comment-->",
            b: "//This is a comment",
            c: "/*This is a comment*/",
            d: "b and c"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the correct way to create a JavaScript array?",
        answers: {
            a: "var colors = 'red', 'blue', 'green'",
            b: "var colors = 1=('red'), 2=('blue'), 3=('green')",
            c: "var colors = ['red', 'blue', 'green']",
            d: "var colors = (1:'red', 2:'blue', 3:'green')"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the output of the following Python code?\n\nx = 10\nx += 2\nprint(x)",
        answers: {
            a: "10",
            b: "12",
            c: "2",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the result of the following code in Python?\n\nprint('Hello World'.find('o'))",
        answers: {
            a: "2",
            b: "4",
            c: "-1",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Computing Style Sheets",
            c: "Creative Style Systems",
            d: "Colorful Style Sheets"
        },
        correctAnswer: "a"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external CSS file?",
        answers: {
            a: "In the <head> section",
            b: "At the end of the document",
            c: "In the <body> section",
            d: "In the <footer> section"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        answers: {
            a: ".demo",
            b: "#demo",
            c: "demo",
            d: "*demo"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of using '&&' operator in JavaScript?",
        answers: {
            a: "It returns true if both operands are true",
            b: "It returns true if either operand is true",
            c: "It returns the first operand if it can be converted to true; otherwise, it returns the second operand.",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the use of the 'enumerate' function in Python?",
        answers: {
            a: "It adds counter to an iterable and returns it",
            b: "It enumerates the number of items in an iterable",
            c: "It checks if an item is present in an iterable",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id='demo'>This is a demonstration.</p>",
        answers: {
            a: "document.getElementById('demo').innerHTML = 'Hello World!';",
            b: "document.getElementByName('p').innerHTML = 'Hello World!';",
            c: "#demo.innerHTML = 'Hello World!';",
            d: "document.getElement('p').innerHTML = 'Hello World!';"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: "v carName;",
            b: "var carName;",
            c: "variable carName;",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What does the following Python statement mean?\n\nif not i % 2",
        answers: {
            a: "If i is not divisible by 2",
            b: "If i modulo 2 is not equal to zero",
            c: "If i is not a multiple of 2",
            d: "If i is not an even number"
        },
        correctAnswer: "b"
    },
    {
        question: "What method in JavaScript is used to remove the whitespace at the beginning and end of any string ?",
        answers: {
            a: "strip()",
            b: "trim()",
            c: "clean()",
            d: "wipe()"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct way to write a JavaScript array with multiple lines?",
        answers: {
            a: "var arr = ['Joe',\n'Sam',\n'Evans'];",
            b: "var arr = 'Joe',\n'Sam',\n'Evans';",
            c: "var arr = (1:'Joe',\n2:'Sam',\n3:'Evans');",
            d: "var arr = 1=('Joe'),\n2=('Sam'),\n3=('Evans');"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answers: {
            a: "<script src='script.js'>",
            b: "<script href='script.js'>",
            c: "<script link='script.js'>",
            d: "<script name='script.js'>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which operator is used in Python to check if two values are not equal?",
        answers: {
            a: "<>",
            b: "!=",
            c: "/=",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        answers: {
            a: "alertBox('Hello World');",
            b: "msg('Hello World');",
            c: "alert('Hello World');",
            d: "msgBox('Hello World');"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the 'break' statement do in Python?",
        answers: {
            a: "It breaks the current loop and resumes at the next statement",
            b: "It breaks the current loop and resumes at the next loop",
            c: "It breaks the current loop and exits the program",
            d: "It breaks the current loop and skips the rest of the code"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the output of the following Python code?\n\nx = True\ny = False\nz = False\n\nif not x or y:\n  print(1)\nelif not x or not y and z:\n  print(2)\nelif not x or y or not y and x:\n  print(3)\nelse:\n  print(4)",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the 'continue' statement do in Python?",
        answers: {
            a: "It continues with the next iteration of the loop",
            b: "It breaks the current iteration and continues with the next statement",
            c: "It breaks the current iteration and resumes at the next loop",
            d: "It breaks the current iteration and exits the program"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you define a function in Python?",
        answers: {
            a: "def functionName()",
            b: "function functionName()",
            c: "functionName() ->",
            d: "function: functionName()"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to call a function named 'myFunction' in JavaScript?",
        answers: {
            a: "call function myFunction()",
            b: "call myFunction()",
            c: "myFunction()",
            d: "myFunction(call)"
        },
        correctAnswer: "c"
    },
    {
        question: "How to insert a comment that has more than one line in JavaScript?",
        answers: {
            a: "//This comment has\n//more than one line",
            b: "/*This comment has\nmore than one line*/",
            c: "<!--This comment has\nmore than one line-->",
            d: "b and c"
        },
        correctAnswer: "b"
    },
    {
        question: "Which HTML attribute is used to define styles?",
        answers: {
            a: "style",
            b: "font",
            c: "class",
            d: "styles"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you select all p elements inside a div element in CSS?",
        answers: {
            a: "div.p",
            b: "div p",
            c: "div > p",
            d: "div + p"
        },
        correctAnswer: "b"
    },
    {
        question: "What does 'DOMContentLoaded' event signify in JavaScript?",
        answers: {
            a: "The entire HTML document has been completely loaded and parsed",
            b: "Only the DOM tree has been completely loaded and parsed",
            c: "All scripts and resources linked to the HTML document have been completely loaded",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct syntax to create a date object in JavaScript?",
        answers: {
            a: "date myDate = new Date()",
            b: "Date()",
            c: "var myDate = new Date()",
            d: "new Date"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the method in JavaScript used to check if a string starts with a specified substring?",
        answers: {
            a: "startsWith()",
            b: "beginsWith()",
            c: "starts()",
            d: "begins()"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: "variable carName",
            b: "v carName",
            c: "var carName",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What will the following Python code print?\n\nprint('25'.isdigit())",
        answers: {
            a: "True",
            b: "False",
            c: "Error",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the result of the following JavaScript code?\n\nconsole.log(1 + '1' - 1)",
        answers: {
            a: "10",
            b: "11",
            c: "110",
            d: "101"
        },
        correctAnswer: "a"
    },
    {
        question: "How can you make a numbered list in HTML?",
        answers: {
            a: "<dl>",
            b: "<ol>",
            c: "<list>",
            d: "<ul>"
        },
        correctAnswer: "b"
    },
    {
        question: "What will be the output of the following Python code?\n\nprint(2 == 2.0)",
        answers: {
            a: "True",
            b: "False",
            c: "Error",
            d: "None of the above"
        },
        correctAnswer: "a"
    }
];

function showQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            } else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

showQuiz(quizQuestions, document.getElementById('quiz'), document.getElementById('results'), document.getElementById('submit'));
