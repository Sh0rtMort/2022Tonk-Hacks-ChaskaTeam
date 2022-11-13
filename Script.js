//Array of weights for each category
var landWeights = [1, 1, 1, 1, 1];
var energyWeights = [1, 1, 1, 1, 1];
var wasteWeights = [1, 1, 1, 1, 1];

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
    //console.log(document.getElementById("EletQ1").value);
    var Elet = [document.getElementById("EletQ1").value, document.getElementById("EletQ2").value, document.getElementById("EletQ3").value];
    //console.log(Elet);
    var Env = [document.getElementById("EnvQ1").value, document.getElementById("EnvQ2").value, document.getElementById("EnvQ3").value];
    //console.log(Env);

    var EletWeighted = getWeighted("energy", Elet);
    //console.log(EletWeighted);
    var EnvWeighted = getWeighted("land", Env);
    //console.log(EnvWeighted);

    var avgScore = (EletWeighted + EnvWeighted) / 2;

    document.getElementById("Results").innerHTML = "Your company's average score is: " + avgScore;
    }

