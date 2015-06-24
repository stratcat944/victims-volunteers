// ++++++++++++++  Victims & Volunteers  ++++++++++++++ //

// Initialize arrays

var vicName = []

var vicPhone = []

var vicStreet = []

var volName = []

var volPhone = []

var volStreet = []


var vicNumber = prompt ("Enter the number of victims you would like to help.");

for (i = vicNumber ; i < vicNumber ; i++ ) {
	vicName.push(prompt("Enter the victim's name:"));
	vicPhone.push(prompt("Enter the victim's phone number;"));
	vicStreet.push(prompt("Enter the victim's street address:"));
}

var volNumber = prompt ("Enter the number of volunteers you would like to enlist:");

for ( i = volNumber ; i < volNumber ; i++ ) {
	volName.push(prompt("Enter the volunteer's name:"));
	volPhone.push(prompt("Enter the volunteer's phone number:"));
	volStreet.push(prompt("Enter the volunteer's street address:"));
}
