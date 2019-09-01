console.log('JS is running');

const salaryArray = [];

$(document).ready(readyNow);

function readyNow () {
    console.log('jQuery is ready');
    $("#submitButton").on('click', addInput);



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
    $("#addNewEmployee2").append (
        `<tr id = "newEntry"> 
        <td>${newFirstName}</td>,
        <td>${newLastName}</td>,
        <td>${newID}</td>,
        <td>${newTitle}</td>,
        <td id = "employeeSalary">${newAnnualSalary}</td>
        <td><button id = "deleteFeature">delete</button></td>
        </tr>`
    );
    $("#deleteFeature").on('click', functionDelete );

    function functionDelete () {
        $("#newEntry").remove();
    }
    $("#totalMonthly").empty();
    $("#totalMonthly").append(`<span>${addIt(salaryArray)}</span>`);
    

}


//[3,2,3,4]; 
function addIt (here) {
    let sum = 0;
    for (let i=0; i<here.length; i++) {
        sum = sum + here[i]
    }
    if (sum >20000 ) {
        $("#totalMonthly").addClass(`error`);
    }
    return sum;
}; 
