// ++++++++++++++  Victims & Volunteers  ++++++++++++++ //

// Initialize arrays

var victimName = [];
var victimPhone = [];
var victimStreet = [];


var volunteerName = [];
var volunteerPhone = [];
var volunteerStreet = [];

var victimCount = prompt ("Enter the number of victims you would like to help.");

for (i = victimCount ; i < victimCount ; i++ ) {
	victimName.push(prompt("Enter the victim's name:"));
	victimPhone.push(prompt("Enter the victim's phone number;"));
	victimStreet.push(prompt("Enter the victim's street address:"));
}

var volunteerCount = prompt ("Enter the number of volunteers you would like to enlist:");

for ( i = volunteerCount ; i < volunteerCount ; i++ ) {
	volunteerName.push(prompt("Enter the volunteer's name:"));
	volunteerPhone.push(prompt("Enter the volunteer's phone number:"));
	volunteerStreet.push(prompt("Enter the volunteer's street address:"));
}

var output = "Victims: " + victimCount + "\n" + " Volunteers: " + volunteerCount + "\n";

output += "____Victims:____\n";


for(var i=0; i<victimCount; i++) {
	output += "  Name: " + victimName[i] + ", " + "Phone: " + victimPhone[i] + ", " + "Street: " + victimStreet[i] + "\n";
}

output += "____Volunteers:____\n";

for(var i=0; i<volunteerCount; i++) {
	output += "  Name: " + volunteerName[i] + ", " + "Phone: " + volunteerPhone[i] + ", " + "Street: " + volunteerStreet[i] + "\n";
}


// Output
alert(output);
console.log(output);



