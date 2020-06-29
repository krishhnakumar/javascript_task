
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


var person = {"Dimensions":[{"Overall lenght":"3500mm"},{"Overall width":"1600mm"},
	         {"Overall height":"1490mm"},{"Wheelbase":"2360mm"},
             {"Track width":[{"Front":"1405mm"},{"Rear":"1400mm"}]},
             {"Minimum turning radius":"4.5mm"},
             {"Minimum ground clearance":"170mm"}
],
"capacites":[{"Seating capacity":"5 person"},{"Fuel tank capacity":"35 litres"}],

  "Engine":[{"Type":"KB-series"},{"number of cylinders":3}
            ,{"Numberof values":12},{"capacity":"998"}
            ,{"bore X scroke":"73.0 X 79.5"},{"Compression ratio":"10:1"}
	,{"Maximum power":"67/6,200"},{"maximum torque":"90/3,500"},
	{"Fuel distribution":"multipoint injection"}	
],
"Transmission":[{Type:"5-speedMT"}],
"chassls":[

{"steering":"Rack & pinion,power assisted"},
{"brakes":[{"Front":"Ventilated discs"},{"Rear":"Drurns"}]},
{"Suspension":[{"Front":"Macphers strut & coil spring"},
{"Rear":"Isoted trailing link & coil spring"}]},{"Shock absorbres":"Gas filled"},{"Tyre(tubless)":"155/80R13"}],

"Weights":[{"Kerb weight(min,with full options)":"860-880"},{"Gross vehicle weight":"1320"}]


}


console.log(person);
	



});