//Array of weights for each category
var landWeights = [1, 1, 1, 1, 1];
var energyWeights = [1, 1, 1, 1, 1];
var wasteWeights = [1, 1, 1, 1, 1];
var EletWeighted = 1;
var EnvWeighted = 1;
var WQWeighted = 1;
var avgScore = 1;

function getWeighted(Category, values) {
    var weights = [];
    switch (Category) {
        case "land": weights = landWeights;
            break;
        case "energy": weights = energyWeights;
            break;
        case "waste": weights = wasteWeights;
            break;
        default : weights = [1, 1, 1, 1, 1];
            }
    var weighted = weightedAverage(values, weights);
    return weighted;
    }

//calculates and makes certain scores better than others
function getWeightedTotalScore() {
    var landScore = weightedAverage(landValues, landWeights);
    var energyScore = weightedAverage(energyValues, energyWeights);
    var wasteScore = weightedAverage(wasteValues, wasteWeights);
    var totalScore = (landScore + energyScore + wasteScore) / 3;
    return totalScore;
    }

// Get a weighted average of the values in an array
function weightedAverage(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += parseInt(values[i]);
        }
        //console.log(sum);
    var avg = sum / values.length;
    return avg;
    }

function doUpdate() {
    var Elet = [document.getElementById("EletQ1").value, document.getElementById("EletQ2").value, document.getElementById("EletQ3").value];
    var Env = [document.getElementById("EnvQ1").value, document.getElementById("EnvQ2").value, document.getElementById("EnvQ3").value];
    var WQ = [document.getElementById("WQ1").value, document.getElementById("WQ2").value, document.getElementById("WQ3").value];

    EletWeighted = Math.round(getWeighted("energy", Elet));
    EnvWeighted = Math.round(getWeighted("land", Env));
    WQWeighted = Math.round(getWeighted("waste", WQ));

    avgScore = Math.round((EletWeighted + EnvWeighted + WQWeighted) / 3);

    console.log("EletWeighted: " + EletWeighted);
    console.log("EnvWeighted: " + EnvWeighted);
    console.log("WQWeighted: " + WQWeighted);
    console.log("avgScore: " + avgScore);

    document.getElementById("overall").src = getScoreImage("default");
    document.getElementById("energy").src = getScoreImage("energy");
    document.getElementById("land").src = getScoreImage("land");
    document.getElementById("waste").src = getScoreImage("waste");

    }

//Map inputed score to coresponding png
function getScoreImage(category) {
    var score = 0;
    switch (category) {
    case "energy": score = EletWeighted;
        break;
    case "land": score = EnvWeighted;
        break;
    case "waste": score = WQWeighted;
        break;
    case "default": score = avgScore;
        break;
    }
    var scoreImage = "";
    switch (score) {
    //Write cases 1-10
    case 1: scoreImage = "F";
        break;
    case 2: scoreImage = "D";
        break;
    case 3: scoreImage = "C-";
        break;
    case 4: scoreImage = "C";
        break;
    case 5: scoreImage = "C+";
        break;
    case 6: scoreImage = "B-";
        break;
    case 7: scoreImage = "B";
        break;
    case 8: scoreImage = "B+";
        break;
    case 9: scoreImage = "A";
        break;
    case 10: scoreImage = "A+";
        break;
    default: scoreImage = "A+";
    }
    var helpText = "";
    switch (category) {
    case "land": helpText = "Land";
        break;
    case "energy": helpText = "Energy";
        break;
    case "waste": helpText = "Waste";
        break;
    case "default": helpText = "Overall";
        break;
    }
    var image = "Assets/Stamps/" + helpText + "/" + scoreImage + helpText + ".png";
    console.log(image);
    return image;
}


