"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Staff_1 = require("./Staff");
var readlineSync = require("readline-sync");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.addManager = function () {
        var REGEX_PHONE = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        var EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        var REGEX_NAME = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        var nameAdd = readlineSync.question('Add name :');
        while (!REGEX_NAME.test(nameAdd)) {
            nameAdd = readlineSync.question('Add name :');
        }
        var ageAdd = readlineSync.question('Add age :');
        while (ageAdd == '') {
            ageAdd = readlineSync.question('Add age :');
        }
        var addressAdd = readlineSync.question('add Address :');
        while (addressAdd == "") {
            addressAdd = readlineSync.question('add Address :');
        }
        var phoneAdd = readlineSync.question('add phone :');
        while (!REGEX_PHONE.test(phoneAdd)) {
            phoneAdd = readlineSync.question('add phone :');
        }
        var gmailAdd = readlineSync.question('add gmail :');
        while (!EMAIL_REGEX.test(gmailAdd)) {
            gmailAdd = readlineSync.question('add gmail :');
        }
        var addCodeManager = readlineSync.question('add codeManager :');
        var addWorkingDay = +readlineSync.question('add workingday :');
        var addWage = +readlineSync.question('add Wage :');
        var staff = new Staff_1.Staff(nameAdd, +ageAdd, addressAdd, phoneAdd, gmailAdd, addCodeManager, addWorkingDay, addWage);
        this.manager.push(staff);
    };
    Manager.showList = function () {
        console.table(this.manager);
    };
    Manager.CountManager = function () {
        console.log(this.manager.length);
    };
    Manager.searchByName = function (name) {
        var result = this.manager.filter(function (element) {
            return element.getName() == name;
        });
        console.table(result);
    };
    Manager.find = function (code) {
        var i = -1;
        this.manager.forEach(function (item, index) {
            if (item.getCodeManager() == code) {
                i = index;
            }
        });
        return i;
    };
    Manager["delete"] = function (code) {
        var yes = true;
        while (yes) {
            if (this.find(code) != -1) {
                this.manager.splice(this.find(code), 1);
                yes = false;
                return this.showList();
            }
            else {
                code = readlineSync.question('Enter code delete :');
            }
        }
    };
    Manager.updateName = function (code, name) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setName(name);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateAge = function (code, age) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setAge(age);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateAddress = function (code, address) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setAddress(address);
        }
        else
            throw Error('does not exist');
    };
    Manager.updatePhone = function (code, addPhone) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setPhone(addPhone);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateEmail = function (code, addEmail) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setEmail(addEmail);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateCodeManager = function (code, addCodeManager) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setCodeManager(addCodeManager);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateWorkingDay = function (code, addWorkingDay) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setWorkingDay(addWorkingDay);
        }
        else
            throw Error('does not exist');
    };
    Manager.updateWage = function (code, addWage) {
        var updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setWage(addWage);
        }
        else
            throw Error('does not exist');
    };
    Manager.showSalary = function () {
        this.manager.sort(function (a, b) {
            return b.getSalary() - a.getSalary();
        });
        console.table(this.manager);
    };
    Manager.manager = [];
    return Manager;
}());
exports.Manager = Manager;
