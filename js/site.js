// get starting values from the screen
// controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // parse values
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);

        // display results on page
        displayNumbers(numbers);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed for Hundo'
            });
        }
}

function generateNumbers(startValue, endValue) {
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

function displayNumbers(numbers) {
    let className = 'even';
    let templateRows = '';

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        // wraps the table
        if (i % 10 == 0) {
            templateRows += "<tr>";
        }

        // template literal
        // string interpolation
        // templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        templateRows += `<td class="${className}"> ${number} </td>`; // for wrap table
        
        if ((i + 1) % 10 == 0) {
            templateRows += "</tr>";
        }
    }

    // innerHTML points to the space between tbody tag
    document.getElementById('results').innerHTML = templateRows;
}