///////////////////
// Apple Orchard //
///////////////////
/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// PROBLEM 1
/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
// CODE HERE

/////////////// BEGIN SOLUTION 1 /////////////////
//Declare variables for the total acres (example: 'fujiSum') of each variety of apple and set the value equal to 0 so that values form the array can later be added.
let fujiSum = 0
let galaSum = 0
let pinkSum = 0

//For each varitey, add each value from the array (acres each day) to the total acre variable declared for that variey. 

//use a for loop to grab each value in the array 'fujiAcres' and add that value to 'fujiSum'
for (let f = 0; f < fujiAcres.length; f++)
    {fujiSum += fujiAcres[f]}
//use a for loop to grab each value in the array 'galaAcres' and add that value to 'galaSum'  
for (let g = 0; g < galaAcres.length; g++)
    {galaSum += galaAcres[g]}
//use a for loop to grab each value in the array 'galaAcres' and add that value to 'pinkSum'  
for (let p = 0; p < pinkAcres.length; p++)
    {pinkSum += pinkAcres[p]}
    
//Declare a variable 'totalAcres' and calculate the sum of all acres picked using the sum of each varity
let totalAcres = fujiSum + galaSum + pinkSum

//print the sum of acres picked for each variey and the total acres picked. 
console.log(fujiSum + " acres of fuji");
console.log(galaSum + " acres of gala");
console.log(pinkSum + " acres of pink lady\n");
console.log(totalAcres + " total acres picked");
/////////////// END SOLUTION 1 /////////////////

// PROBLEM 2
/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
// CODE HERE

/////////////// BEGIN SOLUTION 2 /////////////////
let averageDailyAcres = totalAcres / 7
console.log("Average acres piked per day is " + averageDailyAcres); 
/////////////// END SOLUTION 2 /////////////////

// PROBLEM 3
/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 
*/
let acresLeft = 174 
let days = 0
// CODE HERE

/////////////// BEGIN SOLUTION 3 /////////////////
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days + " day(s) left to complete production\n");
/////////////// END SOLUTION 3 /////////////////

// PROBLEM 4
/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
// CODE HERE

/////////////// BEGIN SOLUTION 4 /////////////////
let fujiTons = []
let galaTons = []
let pinkTons = []
const Ayield = 6.5
    //use a for loop to grab each value in the array 'fujiAcres' and add that value to 'fujiSum'
for (let f1 = 0; f1 < fujiAcres.length; f1++)
        {fujiTons.push(fujiAcres[f1] * Ayield) }

for (let g1 = 0; g1 < galaAcres.length; g1++)
        {galaTons.push(galaAcres[g1] * Ayield) }

for (let p1 = 0; p1 < pinkAcres.length; p1++)
        {pinkTons.push(pinkAcres[p1] * Ayield) }
    //Log 
    console.log("Fuji Tons: "+ JSON.stringify(fujiTons));
    console.log("Gala Tons: "+ JSON.stringify(galaTons));
    console.log("Pink Lady Tons: "+ JSON.stringify(pinkTons) +"\n");
/////////////// END SOLUTION 4 /////////////////

    // PROBLEM 5
/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
// CODE HERE

/////////////// BEGIN SOLUTION 5 /////////////////
    //declare variables for the sum in Tons of each variety picked
let fujiTonSum = 0
let galaTonSum = 0
let pinkTonSum = 0
    //similar top for loops in SOLUTION 2. 
    // Create a sume foe ake caules from the arrays with Tons, and create a sume for 
for (let f2 = 0; f2 < fujiTons.length; f2++)
    {fujiTonSum += fujiTons[f2]}
for (let g2 = 0; g2 < galaTons.length; g2++)
    {galaTonSum += galaTons[g2]}
for (let p2 = 0; p2 < pinkTons.length; p2++)
    {pinkTonSum += pinkTons[p2]}
    //declare variables for the pounds picked for each variety, using a calculaiton of total Tons
let fujiPounds = fujiTonSum * 2000 
let galaPounds = galaTonSum * 2000
let pinkPounds = pinkTonSum * 2000
    //calcualte total tons and total pounds
let totalTons = fujiTonSum + galaTonSum + pinkTonSum 
let totalPounds = totalTons * 2000
    //Pring the sum in tons and pouds for each variety
console.log(fujiTonSum + " tons of fuji");
console.log("(" + fujiPounds + " pounds)\n");
console.log(galaTonSum + " tons of gala");
console.log("(" + galaPounds + " pounds)\n");
console.log(pinkTonSum + " tons of pink lady");
console.log("(" + pinkPounds + " pounds)\n");
    // print the total in tons and pounds
console.log(totalTons + " total tons picked");
console.log("(" + totalPounds + " pounds)\n");
/////////////// END SOLUTION 5 /////////////////

// PROBLEM 6
/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 
             fujiPrice = .89 
             galaPrice = .64
             pinkPrice = .55
    Log each of the profits to the 
    console. 
*/
// CODE HERE
/////////////// BEGIN SOLUTION 6 /////////////////
    // convert the price to dollars
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice
console.log("Profit from fuji: $" + fujiProfit.toFixed(2));
console.log("Profit from gala: $" + galaProfit.toFixed(2));
console.log("Profit from pink lady: $" + pinkProfit.toFixed(2));
/////////////// END SOLUTION 6 /////////////////

// PROBLEM 7
/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
// CODE HERE
/////////////// BEGIN SOLUTION 7 /////////////////
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("\nTotal Profit: $" + totalProfit.toFixed(2));
/////////////// END SOLUTION 7 //////////////////
console.log("\nAuthor: David Lay\nDate: 05/21/23")
