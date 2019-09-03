console.log('JS is running');

const salaryArray = [];
let companySalaryCap = 20000;

$(document).ready(readyNow);

function readyNow () {
    console.log('jQuery is ready');
    addEmployee();
    $("#submitButton").on('click', addInput);
    buttonHover();
}

function addEmployee () {
    $(".deleteFeature").on( 'click', functionDelete);
    function functionDelete () {
        $(this).parent().parent().remove();
    }
}


function addInput () {
    let newFirstName = $("#inputFirstName").val();
    let newLastName = $("#inputLastName").val();
    let newID = $("#inputId").val();
    let newTitle = $("#inputTitle").val();
    let newAnnualSalary = $("#inputAnnualSalary").val();
    let newAnnSalaryNum = Number(newAnnualSalary);

    $("#inputAnnualSalary").removeClass('redBorder');
    $("#inputFirstName").removeClass('redBorder');
    $("#inputLastName").removeClass('redBorder');
    $("totalMonthly").removeClass('error');

    if (newAnnSalaryNum !== Number(newAnnSalaryNum || !newAnnSalaryNum)) {
        alert("Enter your Annual Salary as a number: no commas ( , )");
        $("#inputAnnualSalary").addClass('redBorder');
        return;
    }
    else {
        salaryArray.push(Number(newAnnualSalary));
    }

    if (!newFirstName || !newLastName) {
        alert("Please enter your First and Last name");
        $("#inputFirstName").addClass('redBorder');
        $("#inputLastName").addClass('redBorder');
        return;
    }
    else {
        $("#inputFirstName").val('');
        $("#inputLastName").val('');
        $("#inputId").val('');
        $("#inputTitle").val('');
        $("#inputAnnualSalary").val('');
    }


    console.log(salaryArray);
    
     $("#addNewEmployee").append (
         `<tr id = "newEntry"> 
         <td>${newFirstName}</td>,
         <td>${newLastName}</td>,
         <td>${newID}</td>,
         <td>${newTitle}</td>,
         <td id = "employeeSalary">$${newAnnualSalary}</td>
         <td><button class = "deleteFeature">delete</button></td>
         </tr>`
     );
     addEmployee();
    deletebtnHover();
    $("#totalMonthly").empty();
    $("#totalMonthly").append(`<span>${totalMonth(salaryArray)}</span>`);
    

}

function totalMonth (here) {
    let sum = 0;
    for (let i=0; i<here.length; i++) {
        sum = sum + here[i]
    }
    if (sum > (companySalaryCap * 12) ) {
        $("#totalMonthly").addClass(`error`);
    }
    return (sum / 12);
}; 

function buttonHover () {
    $("#submitButton").mouseenter(hoverColor);
    function hoverColor () {
        $("#submitButton").addClass('buttonHover');
    }
    $("#submitButton").mouseleave(hoverBack);
    function hoverBack () {
        $("#submitButton").removeClass('buttonHover');
    }
}

function deletebtnHover () {
    $(".deleteFeature").mouseenter(hoverDelete);
    function hoverDelete() {
        $(".deleteFeature").addClass('buttonHover');
    }
    $(".deleteFeature").mouseleave(hoverBackClr);
    function hoverBackClr() {
        $(".deleteFeature").removeClass('buttonHover');
    };
}

//PROGRAMMER NOTES
//deleting new tr created using append
// 1. creating button deleting the section tr
// 2. assigning the tr individual id 
// 3. applying button to specific tr's

//getting the delete function to work:
//1. two click events happening in one function: 
//2. move the appending the table w/ button to another function
//3. rename other function, put it in the readyNow

//changing the button id to class, i was able to delete the button
//maybe changing it to class, we're able to use .on?
    //changing button to class --->delete a single button any row when $(this).parent().remove
//when button id = "", we're able to delete one row.

//delete button hover feature didnt't work;
//1. after creating function and put it in readyNow, the hover feature function needs to be
//-called in the same function as .append, since the delete button will be generated there