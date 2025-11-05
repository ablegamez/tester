/*

Basic JS

Copywrite 2023

Yac Nursing

*/

 

window.onload = function(){

//alert("Onload");

startTime = Math.floor(Math.random() * (1045 - 1007 + 1)) + 1007;

document.getElementById("initialText").value = startTime.toString();

}

 

function hello(){

  alert("Hello World!!!");

}

 

function getRandomTimes(){

               console.log("Visit and Travel times:\n");

winValue = document.getElementById("initialText").value;

document.getElementById("endVisit1txt").value = returnVisitTime(winValue);

 

nextTimeStart = document.getElementById("endVisit1txt").value;

document.getElementById("startVisit2txt").value = startVisitTime(nextTimeStart);

nextTimeStart = document.getElementById("startVisit2txt").value;

document.getElementById("endVisit2txt").value = returnVisitTime(nextTimeStart);

 

nextTimeStart = document.getElementById("endVisit2txt").value;

document.getElementById("startVisit3txt").value = startVisitTime(nextTimeStart);

nextTimeStart = document.getElementById("startVisit3txt").value;

document.getElementById("endVisit3txt").value = returnVisitTime(nextTimeStart);

}

 

function returnVisitTime (initialTime) {

if (initialTime.length == 3){

               initialTime = "0" + initialTime;

}

 

hours = parseInt(initialTime.slice(0,2));

mins = parseInt(initialTime.slice(2));

 

endVisit=Math.floor(Math.random() * (80 - 75 + 1)) + 75;

console.log("Visit: " + endVisit);

 

mins = mins + endVisit;

 

               if (mins + endVisit == 60) {

                              endHours++;

                              endVisit = 0;

               }

               else if (mins == 120) {

                              hours++;

                              hours++;

                              mins = 0;

               }

               else if (mins > 120) {

                              hours++;

                              hours++;

                              mins = (mins) - 120;

               }

               else if (mins > 60) {

                              hours++;

                              mins = (mins) - 60;

               }

if (mins < 10){

               mins = "0" + mins;

}

 

if (hours < 10){

               hours = "0" + hours;

}

 

endTime = hours.toString() + "" + mins.toString();

return endTime;

}

 

function startVisitTime (initialTime) {

//console.log(initialTime.slice(0, 2));

 

if (initialTime.length == 3){

               initialTime = "0" + initialTime;

}

 

hours = parseInt(initialTime.slice(0,2));

mins = parseInt(initialTime.slice(2));

 

endVisit=Math.floor(Math.random() * (50 - 35 + 1)) + 35;

console.log("Travel: " + endVisit);

 

mins = mins + endVisit;

 

               if (mins + endVisit == 60) {

                              endHours++;

                              endVisit = 0;

               }

               else if (mins == 120) {

                              hours++;

                              hours++;

                              mins = 0;

               }

               else if (mins > 120) {

                              hours++;

                              hours++;

                              mins = (mins) - 120;

               }

               else if (mins > 60) {

                              hours++;

                              mins = (mins) - 60;

               }

 

if (mins < 10){

               mins = "0" + mins;

}

 

if (hours < 10){

               hours = "0" + hours;

}

 

endTime = hours.toString() + "" + mins.toString();

return endTime;

 

}

 

function getBmi(){

               console.log("BMI Calculator:")

               bmiWeight = document.getElementById("bmiWt").value;

               bmiHeight = document.getElementById("bmiHt").value;

               bmiLevel = (bmiWeight/(bmiHeight * bmiHeight)) * 703;

               bmiLevel = (Math.round(bmiLevel * 100)/100).toFixed(2);

               console.log ("Wt: " + bmiWeight + "lbs + " + "Ht: " + bmiHeight + "inches = " + "BMI of " + bmiLevel);

               document.getElementById("bmiTxt").value = bmiLevel;

}

 