
let amountOfActivities = 1;

function addCell(i, cell) {
    switch(i) {
        case 0:
            var element = document.createTextNode("Activity ");
            cell.appendChild(element);
            element = document.createTextNode(amountOfActivities);
            break;
        case 1:
            var element = document.createTextNode("A");
            cell.appendChild(element);
            element = document.createTextNode(amountOfActivities);
            break;
        case 2:
            var element = document.createElement("input");
            element.setAttribute('type', 'text');
            element.setAttribute('class', 'weight')
            element.setAttribute("size", "1")
            break;
        case 3:
            var element = document.createElement("input");
            element.setAttribute('type', 'text');
            element.setAttribute('class', 'gradeNumerator')
            element.setAttribute("size", "1")
            cell.appendChild(element);

            element = document.createElement("p");
            var text = document.createTextNode(" / ");
            cell.appendChild(text);

            element = document.createElement("input");
            element.setAttribute('type', 'text');
            element.setAttribute('class', 'gradeDenominator');
            element.setAttribute("size", "1");
            break;
        default:
            var element = document.createTextNode("");
            cell.setAttribute('class', 'percentage');
            cell.appendChild(element);
    }
    cell.appendChild(element);
}

function addRow() {
    amountOfActivities++;
    let row = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let cell = document.createElement("td");
        addCell(i, cell);
        row.appendChild(cell);
    }

    let source = document.getElementById("activity");
    source.appendChild(row);
}

function calculateMean() {
    let sum = 0.0;
    for (let i = 0; i < amountOfActivities; i++) {
        let numerator = parseFloat(document.getElementsByClassName("gradeNumerator")[i].value);
        let denominator = parseFloat(document.getElementsByClassName("gradeDenominator")[i].value);
        sum = sum + (numerator / denominator);
    }
    let meanGrade = Math.round((sum / amountOfActivities) * 100);
    if (!isNaN(meanGrade)) {
        document.getElementById("result").innerHTML = meanGrade;
    }
    else {
        window.alert("Please enter valid inputs");
    }
}

function calculateWeight() {
    let sum = 0.0;
    let weightSum = 0.0;
    for (let i = 0; i < amountOfActivities; i++) {
        let numerator = parseFloat(document.getElementsByClassName("gradeNumerator")[i].value);
        let denominator = parseFloat(document.getElementsByClassName("gradeDenominator")[i].value);
        let weight = parseFloat(document.getElementsByClassName("weight")[i].value);
        weightSum = weightSum + weight;
        sum = sum + ((numerator / denominator) * weight);
    }

    let weightedGrade = Math.round((sum / weightSum) * 100);
    if (!isNaN(weightedGrade)) {
        document.getElementById("result").innerHTML = weightedGrade;
    } 
    else {
        window.alert("Please enter valid inputs!");
    }
}

function calculatePercentage() {
    for (let i = 0; i < amountOfActivities; i++) {
        let numerator = parseFloat(document.getElementsByClassName("gradeNumerator")[i].value);
        let denominator = parseFloat(document.getElementsByClassName("gradeDenominator")[i].value);

        if (!isNaN(numerator) && !isNaN(denominator)) {
            let percentage = Math.round((numerator / denominator) * 100);
            document.getElementsByClassName("percentage")[i].innerHTML = percentage + "%";
        }
        
    }
}

window.addEventListener('keyup', calculatePercentage);

