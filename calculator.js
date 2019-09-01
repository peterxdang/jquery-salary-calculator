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

    salaryArray.push(newAnnualSalary);
    console.log(salaryArray);
    $("#addNewEmployee2").append (
        `<tr> 
        <td>${newFirstName}</td>,
        <td>${newLastName}</td>,
        <td>${newID}</td>,
        <td>${newTitle}</td>,
        <td id = "employeeSalary">${newAnnualSalary}</td>
        <td><button id = "deleteFeature">delete</button></td>
        </tr>`
    );
    $("#deleteFeature").on('click', functionDelete );
    

}