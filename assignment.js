// https://github.com/jubayerweb/problem-solving-assignment

// kilometerToMeter 

function kilometerToMeter(n) {
  if (n <= 0) {
    return "Distance can not be negative!";
  }
  else {
    return n * 1000;
  }
}

// budgetCalculator 

function budgetCalculator(watch, phone, laptop) {
  if (watch <= 0 || phone <= 0 || laptop <= 0) {
    return 'Invalid Input!';
  }
  else {
    return (watch * 50) + (phone * 100) + (laptop * 500);
  }
}

// hotelCost 

function hotelCost(day) {
  var rent = 0;
  if (day <= 10) {
    rent = day * 100;
  }
  else if (day <= 20) {
    var firstTimeCost = 10 * 100;
    var extraDays = day - 10;
    var midTimeCost = extraDays * 80;
    rent = firstTimeCost + midTimeCost;
  }
  else {
    firstTimeCost = 10 * 100;
    midTimeCost = 10 * 80;
    extraDays = day - 20;
    var lastTimeCost = extraDays * 50;
    rent = firstTimeCost + midTimeCost + lastTimeCost;
  }
  return rent;
}

// megaFriend 

function megaFriend(names) {
  var longText = names[0];
  for (i = 0; i < names.length; i++) {
    if (names[i].length > longText.length) {
      longText = names[i];
    }
  }
  return longText;
}
