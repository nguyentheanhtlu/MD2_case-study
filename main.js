"use strict";
exports.__esModule = true;
var Manager_1 = require("./Manager");
var readlineSync = require("readline-sync");
function menu() {
    console.log("1: add staff");
    console.log("2: show list");
    console.log('3: countManager');
    console.log('4: SearchByName');
    console.log('5: delete');
    console.log('6: UppDateManager');
    console.log('7: showSalary');
}
function MenuUpdate() {
    console.log('1 : updateName');
    console.log('2 : updateAge');
    console.log('3 : updateAddress');
    console.log('4 : updatePhone');
    console.log('5 : updateEmail');
    console.log('6 : updateCode');
    console.log('7 : updateWorkingDay');
    console.log('8 : updateWage');
}
var isExist = true;
while (isExist == true) {
    console.clear();
    menu();
    var number = readlineSync.question('select function :  ');
    switch (number) {
        case "1":
            Manager_1.Manager.addManager();
            break;
        case "2":
            Manager_1.Manager.showList();
            break;
        case "3":
            Manager_1.Manager.CountManager();
            break;
        case "4":
            var name_1 = readlineSync.question('Enter the name you want to search :');
            Manager_1.Manager.searchByName(name_1);
            break;
        case "5":
            var code = readlineSync.question('enter the person you want to delete :');
            Manager_1.Manager["delete"](code);
            break;
        case "6":
            var nice = true;
            while (nice) {
                var REGEX_PHONE = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
                var EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
                var REGEX_NAME = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
                MenuUpdate();
                var UppDate = readlineSync.question('the content you want to write :');
                switch (UppDate) {
                    case '1':
                        var updateCode = readlineSync.question('Enter the code you want to edit :');
                        var updateName = readlineSync.question('Enter the name new :');
                        while (!REGEX_NAME.test(updateName)) {
                            updateName = readlineSync.question('add name new :');
                        }
                        Manager_1.Manager.updateName(updateCode, updateName);
                        break;
                    case '2':
                        var updateCode1 = readlineSync.question('Enter the code you want to edit :');
                        var updateAge = +readlineSync.question('Enter the age new :');
                        Manager_1.Manager.updateAge(updateCode1, updateAge);
                        break;
                    case '3':
                        var updateCode2 = readlineSync.question('Enter the code you want to edit :');
                        var updateAddress = readlineSync.question('Enter the Address new :');
                        Manager_1.Manager.updateAddress(updateCode2, updateAddress);
                        break;
                    case '4':
                        var updateCode3 = readlineSync.question('Enter the code you want to edit :');
                        var updatePhone = readlineSync.question('Enter the phone new :');
                        while (!REGEX_PHONE.test(updatePhone)) {
                            updatePhone = readlineSync.question('add phone :');
                        }
                        Manager_1.Manager.updatePhone(updateCode3, updatePhone);
                        break;
                    case '5':
                        var updateCode4 = readlineSync.question('Enter the code you want to edit :');
                        var updateEmail = readlineSync.question('Enter the Email new :');
                        while (!REGEX_PHONE.test(updateEmail)) {
                            updateEmail = readlineSync.question('add email :');
                        }
                        Manager_1.Manager.updateEmail(updateCode4, updateEmail);
                        break;
                    case '6':
                        var updateCode5 = readlineSync.question('Enter the code you want to edit :');
                        var updateCodeManager = readlineSync.question('Enter the CodeManager new :');
                        Manager_1.Manager.updateCodeManager(updateCode5, updateCodeManager);
                        break;
                    case '7':
                        var updateCode6 = readlineSync.question('Enter the code you want to edit :');
                        var updateWorkingDay = readlineSync.question('Enter the WorkingDay new :');
                        Manager_1.Manager.updateWorkingDay(updateCode6, updateWorkingDay);
                        break;
                    case '8':
                        var updateCode7 = readlineSync.question('Enter the code you want to edit :');
                        var updateWage = readlineSync.question('Enter the Wage new :');
                        Manager_1.Manager.updateWage(updateCode7, updateWage);
                        break;
                    case '0':
                        nice = false;
                        break;
                }
            }
        case '7':
            Manager_1.Manager.showSalary();
            break;
        case "0":
            isExist = false;
            break;
    }
}
