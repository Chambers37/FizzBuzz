
//Get values from the user.

function getValues() {

    //Get user values from dom
    let fizzValue = parseInt(document.getElementById('fizzValue').value);
    let buzzValue = parseInt(document.getElementById('buzzValue').value);

    //Check that values are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        
        //Call FizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        //Display FizzBuzz values
        displayData(fbArray);
        
    } 
    else {
        
        alert("You can only enter integers.")
    }
}

function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];
    
    //Loop from 1-100
    for (let i = 1; i <= 100; i++) {

        //Check 1 - If divisible by both values
        // if so, push fizzbuzz into array
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            
            returnArray.push('FizzBuzz')
        } 
        
        //Check 2 - If divisible by fizz value
        //If so, push fizz into array
        else if (i % fizzValue == 0) {
            
            returnArray.push('Fizz')
        }
        
        //Check 3 - If divisible by buzz value
        //If so, push buzz into array
        else if (i % buzzValue == 0) {
            
            returnArray.push('Buzz')
        
        }

        else {
            returnArray.push(i)
        }
    }

    return returnArray;

}

//Loop over the array and create tablerow for each item
function displayData(fbArray) {

    //Get the table body from dom
    let tableBody = document.getElementById('results');

    //Get the template
    let templateRow = document.getElementById('fbTemplate');
    
    //Clear the table first
    tableBody.innerHTML = '';

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //Grab all the 'td' and put into array
        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(fbArray[index]); //Setting the class of each index equal to the value of the index
        rowCols[0].textContent = fbArray[index];  //so we can easily color through css
        
        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];
        
        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];
        
        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];
        
        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];
        
        //Add all rows to the table
        tableBody.appendChild(tableRow);
    }
}   