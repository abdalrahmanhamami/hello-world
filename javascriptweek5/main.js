let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let concatenated = monday.concat(tuesday),
fees = [],
formatted_sum,
hourly_rate = 25,
total_fee = 0;

concatenated.forEach(function (task) {
var duration = task.duration / 60;
 
if (duration >= 2) {
    fees.push(duration * hourly_rate);
}
});

fees.forEach(function (fee) {
total_fee += fee
});


var formattedSum = '$' + total_fee.toFixed(2);

console.log(formattedSum);




// let tasks = monday.concat(tuesday);


//                   // Concatenate our 2D array into a single list
// let result = tasks.reduce((acc, current) => acc.concat(current))
//                   // Extract the task duration, and convert minutes to hours
//                   .map((task) => task.duration / 60)
//                   // Filter out any task that took less than two hours
//                   .filter((duration) => duration >= 2)
//                   // Multiply each tasks' duration by our hourly rate
//                   .map((duration) => duration * 15)
//                   // Combine the sums into a single dollar amount
//                   .reduce((acc, current) => [(+acc) + (+current)])
//                   // Convert to a "pretty-printed" dollar amount
//                   .map((amount) => '$' + amount.toFixed(2))
//                   // Pull out the only element of the array we got from map
//                   .reduce((formatted_amount) =>formatted_amount);

// console.log(result);


