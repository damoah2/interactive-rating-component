// find selected rate button and submit
function getSelectedRate() {
    disableRating();
    let selected = $('input[name=rate]:checked', '#options').val();
    console.log(selected);

    // display the selected rating
    document.getElementById("selected").innerHTML = selected;
    enableResults();
}


function disableRating() {
    document.getElementById("rating").classList.add("disabled");
    //show result
    
}

function enableResults() {
    document.getElementById("thank-you").classList.remove("disabled");
}