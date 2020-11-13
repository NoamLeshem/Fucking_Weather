const weather = {
    0: "Sunny",
    1: "Clear",
    2: "Partially Cloudy",
    3: "Cloudy",
    4: "Overcast",
    5: "Rain",
    6: "Drizzle",
    7: "Snow",
    8: "Stormy",
    9: "Tornado",
    10: "Thunderstorm",
    11: "Thundersnow",
    12: "Fog",
    13: "Hurricane",
    14: "Sandstorm"
}

const day = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

function setup() {
    sortTableByDay();
}

function getLocation() {

    var search_input = document.getElementById("search_input");

    var location_name = document.getElementById("display_location");

    var word = search_input.value;

    location_name.innerHTML = word;
}

function getWeather() {




}

function sortTableByDay() {

    var date = new Date();
    var current_day = date.getDay();
    var week_table = document.getElementById("week_table");
    var day_count = 0;
    let i = 0;

    while (day_count < 7) {

        var row = week_table.insertRow(i);

        var day_name = row.insertCell(0);
        var weather = row.insertCell(1);
        //TODO - add temp

        day_name.innerHTML = day[7 - i];
        weather.innerHTML = "rainy";

        day_count++;
    }
}



function openWeekDay(evt, dayName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}