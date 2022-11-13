const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

        document.querySelector('body').addEventListener('click', event => {
            if (event.target.matches('next')) {
        event.preventDefault();
                alert('hi')
            }
        });
        document.querySelector('body').addEventListener('click', event => {
            if (event.target.matches('submit')) {
        event.preventDefault();
                alert('hi')
            }
        });

//Array of weights for each category
var landWeights = [0.2, 0.2, 0.2, 0.2, 0.2];
var energyWeights = [0.2, 0.2, 0.2, 0.2, 0.2];
var wasteWeights = [0.2, 0.2, 0.2, 0.2, 0.2];

function getWeighted(Category, values) {
    var weights = [];
    switch (Category) {
        case "land": weights = landWeights;
            break;
        case "energy": weights = energyWeights;
            break;
        case "waste": weights = wasteWeights;
            break;
            }
    var weightedAverage = weightedAverage(values, weights);
    return weightedAverage;
    }


function getWeightedTotalScore() {
    var landScore = weightedAverage(landValues, landWeights);
    var energyScore = weightedAverage(energyValues, energyWeights);
    var wasteScore = weightedAverage(wasteValues, wasteWeights);
    var totalScore = (landScore + energyScore + wasteScore) / 3;
    return totalScore;
    }

// Get a weighted average of the values in an array
function weightedAverage(values, weights) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i] * weights[i];
    }
    return sum / weights.reduce(function (a, b) {
        return a + b;
    });
    }

enum Category {
    Land = 0,
    Energy = 1,
    Waste = 2
    }

