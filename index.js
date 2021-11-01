/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeCard) {
    const employeeInfo = {
        firstName: employeeCard[0], 
        familyName: employeeCard[1], 
        title: employeeCard[2], 
        payPerHour: employeeCard[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }

    console.log(employeeInfo);
    return employeeInfo;
}

function createEmployeeRecords(employeeCards) {
    let employeeRecords = employeeCards.map(employeeCard => createEmployeeRecord(employeeCard));
    return employeeRecords;
}

function createTimeInEvent(timeStamp) {
    const timeInObject = {
        type: "TimeIn", 
        hour: parseInt(timeStamp.substring(11, 15), 10),
        date: timeStamp.substring(0, 10)
    }

    this.timeInEvents.push(timeInObject);
    return this;
}

function createTimeOutEvent(timeStamp) {
    const timeOutObject = {
        type: "TimeOut", 
        hour: parseInt(timeStamp.substring(11, 15), 10),
        date: timeStamp.substring(0, 10)
    }

    this.timeOutEvents.push(timeOutObject);
    return this;
}

function hoursWorkedOnDate(dateToCheck) {
    for(let i = 0; i < this.timeInEvents.length; i++) {
        if(this.timeInEvents[i].date === dateToCheck) {
            //This is the date:
            return ((this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100);
            break;
        }
    }
}

function wagesEarnedOnDate(dateToCheck) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateToCheck);
    return(hoursWorked * this.payPerHour);
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employeeRecords, firstNameToFind) {
    for(let record of employeeRecords) {
        if(record.firstName === firstNameToFind) {
            return record;
        }
    }
    return undefined;
}

function calculatePayroll(employeeRecords) {
    const totalPay = [];

    for(let i = 0; i < employeeRecords.length; i++) {
        totalPay.push(allWagesFor.call(employeeRecords[i]));
    }

    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    let newAmount = totalPay.reduce(reducer, 0);
    
    return totalPay.reduce(reducer, 0);
}

// createEmployeeRecord(["Adam", "Lenter", "Boss", 100]);
// const timeStamp = "2021-10-21 1420";

// createTimeInEvent(timeStamp);


const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

