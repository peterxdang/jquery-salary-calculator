console.log('JS is running');

const salaryArray = [];
let companySalaryCap = 20000;

$(document).ready(readyNow);

function readyNow () {
    console.log('jQuery is ready');
    addEmployee();
    $("#submitButton").on('click', addInput);
}

function addEmployee () {
    $("#deleteFeature").on( 'click', functionDelete);

    function functionDelete () {
        $(`#newEntry`).remove();
    }
}


function addInput () {
    let newFirstName = $("#inputFirstName").val();
    let newLastName = $("#inputLastName").val();
    let newID = $("#inputId").val();
    let newTitle = $("#inputTitle").val();
    let newAnnualSalary = $("#inputAnnualSalary").val();
    let newAnnSalaryNum = Number(newAnnualSalary);

    $("totalMonthly").removeClass('error');
    if (newAnnSalaryNum !== Number(newAnnSalaryNum)) {
        alert("Enter your Annual Salary as a number: no commas ( , )");
        $("#inputAnnualSalary").val('');
        return;
    }
    else {
        salaryArray.push(Number(newAnnualSalary));
    }

    console.log(salaryArray);
    
     $("#addNewEmployee").append (
         `<tr id = "newEntry"> 
         <td>${newFirstName}</td>,
         <td>${newLastName}</td>,
         <td>${newID}</td>,
         <td>${newTitle}</td>,
         <td id = "employeeSalary">${newAnnualSalary}</td>
         <td><button id = "deleteFeature">delete</button></td>
         </tr>`
     );
     addEmployee();
    //  $("#deleteFeature").on( 'click', functionDelete);

    //  function functionDelete () {
    //      $(this).parent().parent().remove();
    //  }
    
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

//deleting new tr created using append
// 1. creating button deleting the section tr
// 2. assigning the tr individual id 
// 3. applying button to specific tr's

//getting the delete function to work:
//1. two click events happening in one function: 
//2. move the appending the table w/ button to another function
//3. rename other function, put it in the readyNow
//
//