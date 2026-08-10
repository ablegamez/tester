/*

Basic JS

Copywrite 2023

Yac Nursing

*/

window.onload = function () {
  //alert("Onload");

  startTime = Math.floor(Math.random() * (1045 - 1007 + 1)) + 1007;

  document.getElementById("initialText").value = startTime.toString();
};

window.memberData = {
  gender: "",
  name: "",
  symp: "",
  diag: "",
  family: "",
  famname: "",
  famnumber: "",
  pcp: "",
  pcpnumb: "",
  agencyname: "",
  agencynumb: "",
  mealscomp: "",
  mealsday: "",
  dmecomp: "",
  dmenumb: "",
  cane: false,
  walker: false,
  manualwheel: false,
  powerwheel: false,
  showerchair: false,
  incontsupplies: false,
  timeschanged: "",
  attire: "",
  PASschedule: "",
  diapers: "",
  timesbathed: "",
  typebathing: "",
  storedist: "",
  livingsit: "",
  speclaundry: "",
  washer: false,
  dryer: false,
  escortneeded: "",
  escortfreq: "",
  escortamt: "",
  whoisseen: "",
  transp: "",
  mealsday: "",
  diet: "",
  foodpref: "",
  bpsys: "",
  bpdias: "",
  ht: "",
  wt: "",
  bshigh: "",
  bslow: "",
  starttext: "",
};

function hello() {
  alert("Hello World!!!");
}

function getRandomTimes() {
  console.log("Visit and Travel times:\n");

  winValue = document.getElementById("initialText").value;

  document.getElementById("endVisit1txt").value = returnVisitTime(winValue);

  nextTimeStart = document.getElementById("endVisit1txt").value;

  document.getElementById("startVisit2txt").value =
    startVisitTime(nextTimeStart);

  nextTimeStart = document.getElementById("startVisit2txt").value;

  document.getElementById("endVisit2txt").value =
    returnVisitTime(nextTimeStart);

  nextTimeStart = document.getElementById("endVisit2txt").value;

  document.getElementById("startVisit3txt").value =
    startVisitTime(nextTimeStart);

  nextTimeStart = document.getElementById("startVisit3txt").value;

  document.getElementById("endVisit3txt").value =
    returnVisitTime(nextTimeStart);
}

function returnVisitTime(initialTime) {
  if (initialTime.length == 3) {
    initialTime = "0" + initialTime;
  }

  hours = parseInt(initialTime.slice(0, 2));

  mins = parseInt(initialTime.slice(2));

  endVisit = Math.floor(Math.random() * (80 - 75 + 1)) + 75;

  console.log("Visit: " + endVisit);

  mins = mins + endVisit;

  if (mins + endVisit == 60) {
    endHours++;

    endVisit = 0;
  } else if (mins == 120) {
    hours++;

    hours++;

    mins = 0;
  } else if (mins > 120) {
    hours++;

    hours++;

    mins = mins - 120;
  } else if (mins > 60) {
    hours++;

    mins = mins - 60;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  endTime = hours.toString() + "" + mins.toString();

  return endTime;
}

function startVisitTime(initialTime) {
  //console.log(initialTime.slice(0, 2));

  if (initialTime.length == 3) {
    initialTime = "0" + initialTime;
  }

  hours = parseInt(initialTime.slice(0, 2));

  mins = parseInt(initialTime.slice(2));

  endVisit = Math.floor(Math.random() * (50 - 35 + 1)) + 35;

  console.log("Travel: " + endVisit);

  mins = mins + endVisit;

  if (mins + endVisit == 60) {
    endHours++;

    endVisit = 0;
  } else if (mins == 120) {
    hours++;

    hours++;

    mins = 0;
  } else if (mins > 120) {
    hours++;

    hours++;

    mins = mins - 120;
  } else if (mins > 60) {
    hours++;

    mins = mins - 60;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  endTime = hours.toString() + "" + mins.toString();

  return endTime;
}

function getBmi() {
  console.log("BMI Calculator:");

  bmiWeight = document.getElementById("bmiWt").value;

  bmiHeight = document.getElementById("bmiHt").value;

  bmiLevel = (bmiWeight / (bmiHeight * bmiHeight)) * 703;

  bmiLevel = (Math.round(bmiLevel * 100) / 100).toFixed(2);

  console.log(
    "Wt: " +
      bmiWeight +
      "lbs + " +
      "Ht: " +
      bmiHeight +
      "inches = " +
      "BMI of " +
      bmiLevel,
  );

  document.getElementById("bmiTxt").value = bmiLevel;
}

document.getElementById("genderCheck").addEventListener("change", function () {
  //console.log(this.checked);
  checkGender();
});

document.getElementById("memberNameBox").addEventListener("blur", function () {
  if (memberData.gender == "male") {
    memberData.name = "Mr. " + document.getElementById("memberNameBox").value;
  } else {
    memberData.name = "Ms. " + document.getElementById("memberNameBox").value;
  }
  //console.log(memberData.name);
});

document.getElementById("memberDxBox").addEventListener("blur", function () {
  //console.log(this.checked);
  memberData.symp =
    document.getElementById("memberSymptomBox").value +
    " related to " +
    document.getElementById("memberDxBox").value;
  memberData.starttext =
    memberData.name +
    " has the following functional limitations: " +
    memberData.symp +
    ".  ";
  start6516();
  //runStatements();
});

function checkGender() {
  //alert(document.getElementById("genderCheck").value);
  //const checkedBox = document.getElementById("genderCheck").value
  if (document.getElementById("genderCheck").checked) {
    memberData.gender = "male";
  } else {
    memberData.gender = "female";
  }
  //console.log("member is " + memberData.gender);
}

// async function runStatements() {
//   const statements = ["statement a", "statement b", "statement c"];
//   for (i = 0; i < statements.length; i++) {
//     await navigator.clipboard.writeText(statements[i]);
//     alert("copied\n\n" + statements[i] + "\n\nok to continue");
//   }
//   alert("Done");
// }

async function start6516() {
  memberData.family = prompt("Who is the family?");

  const statements = [
    memberData.starttext + " Bathng stuff" + memberData.family,
    memberData.starttext + " Dressing stuff" + memberData.family,
    memberData.starttext + " Feeding stuff" + memberData.family,
  ];
  for (let i = 0; i < statements.length; i++) {
    await navigator.clipboard.writeText(statements[i]);
    alert("Copied\n\n" + statements[i] + "\n\nOK to continue.");
  }
  alert("Done");
}

function bathingText() {
  bathingTxt = memberData.starttext + " Bathing.";
  console.log(bathingTxt);
  alert("Start6516\nPaste bathing.");
  return navigator.clipboard.writeText(bathingTxt);
}
function dressingText() {
  dressingTxt = memberData.starttext + "dressing.";
  console.log(dressingTxt);
  alert("Paste dressing.");
  return navigator.clipboard.writeText(dressingTxt);
}
