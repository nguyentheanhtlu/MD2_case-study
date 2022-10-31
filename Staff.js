"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, age, address, phone, email, codeManager, workingday, wage) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.codeManager = codeManager;
        this.workingday = workingday;
        this.wage = wage;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.getAddress = function () {
        return this.address;
    };
    Staff.prototype.getPhone = function () {
        return this.phone;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getCodeManager = function () {
        return this.codeManager;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    Staff.prototype.setAddress = function (address) {
        this.address = address;
    };
    Staff.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setCodeManager = function (codeManager) {
        this.codeManager = codeManager;
    };
    Staff.prototype.setWorkingDay = function (workingday) {
        this.workingday = workingday;
    };
    Staff.prototype.setWage = function (wage) {
        this.wage = wage;
    };
    Staff.prototype.getWorkingday = function () {
        return this.workingday;
    };
    Staff.prototype.getWage = function () {
        return this.wage;
    };
    Staff.prototype.getSalary = function () {
        var salary = this.workingday * this.wage;
        if (this.workingday < 26) {
            return (salary - salary * (15 / 100));
        }
        else {
            return (salary + salary * (10 / 100));
        }
    };
    return Staff;
}());
exports.Staff = Staff;
