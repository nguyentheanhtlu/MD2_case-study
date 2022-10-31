export class Staff {
    private name: string;
    private age: number;
    private address: string;
    private phone: string;
    private email: string;
    private codeManager: string;
    private workingday: number;
    private wage: number;

    constructor(name: string,
                age: number,
                address: string,
                phone: string,
                email: string,
                codeManager: string,
                workingday: number,
                wage: number) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.codeManager = codeManager;
        this.workingday = workingday;
        this.wage = wage;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    getCodeManager() {
        return this.codeManager;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAddress(address) {
        this.address = address;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setEmail(email) {
        this.email = email;
    }

    setCodeManager(codeManager) {
        this.codeManager = codeManager;
    }

    setWorkingDay(workingday) {
        this.workingday = workingday;
    }

    setWage(wage) {
        this.wage = wage;
    }

    getWorkingday() {
        return this.workingday;
    }

    getWage() {
        return this.wage;
    }

    getSalary() {
        let salary = this.workingday * this.wage;
        if (this.workingday < 26) {
            return (salary - salary * (15 / 100))
        } else {
            return (salary + salary * (10 / 100))
        }
    }

}
