/* 
In this project were going to discuss the use of IF statements while learning more about 
 user input as you can see when I began this comment, it is no longer using the standard two slashes //
 This is because when working with multiple lines of text that we want to comment out it can get pretty
 annoying beginning each line with a // . Therefore the /* is a much better alternative. You can also highlight
 blocks of code you want to comment out and press the key CTRL + / and that automatically does it for you. To close
 this type of comment, end it with a 
*/ 

// the following code below is a casual if statement

/*

if (condition) {
    *****code here*****
}

If the condition is proven TRUE the indicated code will be executed, it will be skipped otherwise. This is only checked
once. Only if the program is looped or ran again, that the IF statement can be run more than once, (we will get into loops
this week)

For more information on IF statements please refer back to slides
*/

var x = 3;

if (x == 3) {
    console.log("the value of x is 3");
}

// this code when run will print "The value of x is 3" when the variable is equal 3, after running the code comment it out

var y = 0;

if (y = 0) {
    console.log("The value of y is 0");
}
else {
    console.log("The value of y is not 0, its", x);
}

/* 
------------------------------------------------------------------------------------------------------------------------------------
Scenario: your designing a program for your company that charges users on their input value of money, if their value
is less than $100, they are charged a $10 fee, if it exceeds $100 but is less than $500, they are charged a fee of 30%, if
it is higher than $500 they are chargeda fee of 20%, and lastly if its higher than $1000, the fee is 10% */

// code goes here

//-----------------------------------------------------------------------------------------------------------------------------------


//this is a loop

count = 0;

while (count != 10) {
    console.log("Hi");
    count = count + 1;
}

/*
this will print 'Hi' 10 times, this is run at first when count = 0 it will print 'Hi' and add 1 to count (count is a variable meaning
it can be anything) once that count reaches 10, the loop will stop running

Also instead of 'count = count + 1' you can shorten it to count += 1
*/

/*----------------------------------------------------------------------------------------------------------------------------------
Scenario 2: Your building a program that will print Happy Birthday the number of times the users age is
ex. age = 2 (Output: Happy Birthday Happy Birthday)*/

// code goes here

//----------------------------------------------------------------------------------------------------------------------------------


// This is a FOR LOOP

for (x = 0; x <= 10; x++) {
    console.log('this was printed', x, 'times!' );
}

/*
As one can see it is much easier than a WHILE loop and can do about the same things in shorter lines of code. You will learn more about the 
differences in while and for loops in the upcoming lesson

You have reached the end of this repo, Great Job!

*/




