


$( document ).ready(function() {
    function calculateBA() {
        // get all inputs
        var numberOfBeers = $("#bac-num-beers").val();
        console.log(numberOfBeers);
        var numberOfWine = $("#bac-num-wine").val();
        var numberOfShots = $("#bac-num-shots").val();
        var pounds = $("#bac-pounds").val();
        var hours = $("#bac-hours-since").val();

        var totalAlcoholConsumed = (numberOfBeers * 0.54) + (numberOfWine * 0.6) + (numberOfShots * 0.6);

        // apply alcohol  absorption
        totalAlcoholConsumed *= 7.5;

        // apply persons weight
        totalAlcoholConsumed /= pounds;

        // apply time since first drink
        totalAlcoholConsumed -= (hours * 0.015);

        // round it to third decimal place
        var bloodAlcohol = totalAlcoholConsumed;

        // output
        $("#bac-output").text("Your Blood Alcohol Level Is: " + bloodAlcohol.toFixed(3));

    }

    $( "#bac-calculate-button" ).click(function(e) {
        e.preventDefault();
        calculateBA();
    });


});