import {Staff} from "./Staff";
import * as readlineSync from "readline-sync"

export class Manager {
    static manager: Staff[] = [];

    constructor() {
    }

    static addManager(): void {
        const REGEX_PHONE: RegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        const EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        const REGEX_NAME: RegExp = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;


        let nameAdd = readlineSync.question('Add name :');
        while (!REGEX_NAME.test(nameAdd)) {
            nameAdd = readlineSync.question('Add name :')
        }

        let ageAdd = readlineSync.question('Add age :');
        while (ageAdd == '') {
            ageAdd = readlineSync.question('Add age :')
        }

        let addressAdd = readlineSync.question('add Address :');
        while (addressAdd == "") {
            addressAdd = readlineSync.question('add Address :');
        }
        let phoneAdd = readlineSync.question('add phone :');

        while (!REGEX_PHONE.test(phoneAdd)) {
            phoneAdd = readlineSync.question('add phone :');
        }
        let gmailAdd = readlineSync.question('add gmail :');
        while (!EMAIL_REGEX.test(gmailAdd)) {
            gmailAdd = readlineSync.question('add gmail :')
        }
        let addCodeManager = readlineSync.question('add codeManager :');
        let addWorkingDay = +readlineSync.question('add workingday :');
        let addWage = +readlineSync.question('add Wage :');
        let staff = new Staff(nameAdd, +ageAdd, addressAdd, phoneAdd, gmailAdd, addCodeManager, addWorkingDay, addWage)

        this.manager.push(staff);
    }

    static showList(): void {
        console.table(this.manager);
    }

    static CountManager(): void {
       console.log(this.manager.length);
    }

    static searchByName(name): void {
        let result = this.manager.filter(element => {
            return element.getName() == name;
        })
        console.table(result);
    }

    static find(code: string): number {
        let i = -1;
        this.manager.forEach((item, index) => {
            if (item.getCodeManager() == code) {
                i = index
            }
        })
        return i;
    }

    static delete(code: string) {
        let yes = true
        while (yes) {
            if (this.find(code) != -1) {
                this.manager.splice(this.find(code), 1)
                yes = false;
                return this.showList();
            } else {
                code = readlineSync.question('Enter code delete :');
            }
        }
    }

    static updateName(code: string, name: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setName(name);
        } else throw Error('does not exist');
    }

    static updateAge(code: string, age: number) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setAge(age);
        } else throw Error('does not exist');
    }

    static updateAddress(code: string, address: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setAddress(address);
        } else throw Error('does not exist');
    }

    static updatePhone(code: string, addPhone: string) {

        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setPhone(addPhone);
        } else throw Error('does not exist');
    }

    static updateEmail(code: string, addEmail: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setEmail(addEmail);
        } else throw Error('does not exist');
    }

    static updateCodeManager(code: string, addCodeManager: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setCodeManager(addCodeManager);
        } else throw Error('does not exist');
    }

    static updateWorkingDay(code: string, addWorkingDay: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setWorkingDay(addWorkingDay);
        } else throw Error('does not exist');
    }

    static updateWage(code: string, addWage: string) {
        let updateManager = this.find(code);
        if (updateManager != -1) {
            this.manager[updateManager].setWage(addWage);
        } else throw Error('does not exist');
    }


    static showSalary() {
        this.manager.sort((a, b) => {
            return b.getSalary() - a.getSalary();
        })
        console.table(this.manager);
    }


}