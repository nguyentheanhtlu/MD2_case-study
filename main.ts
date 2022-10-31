import {Staff} from "./Staff";
import {Manager} from "./Manager";
import * as readlineSync from "readline-sync"

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

let isExist = true
while (isExist == true) {
    console.clear();
    menu();
    let number = readlineSync.question('select function :  ')
    switch (number) {
        case "1":
            Manager.addManager();
            break;
        case "2":
            Manager.showList();
            break;
        case "3" :
            Manager.CountManager();
            break;

        case "4" :
            let name = readlineSync.question('Enter the name you want to search :');
            Manager.searchByName(name);
            break;
        case "5" :
            let code = readlineSync.question('enter the person you want to delete :');
            Manager.delete(code);
            break;
        case "6" :
            let nice = true;
            while (nice) {
                const REGEX_PHONE: RegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
                const EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
                const REGEX_NAME: RegExp = /^^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
                MenuUpdate()
                let UppDate = readlineSync.question('the content you want to write :')
                switch (UppDate) {
                    case '1' :
                        let updateCode = readlineSync.question('Enter the code you want to edit :');
                        let updateName = readlineSync.question('Enter the name new :');
                        while (!REGEX_NAME.test(updateName)) {
                            updateName = readlineSync.question('add name new :');
                        }
                        Manager.updateName(updateCode, updateName);
                        break;

                    case '2' :
                        let updateCode1 = readlineSync.question('Enter the code you want to edit :');
                        let updateAge = +readlineSync.question('Enter the age new :');
                        Manager.updateAge(updateCode1, updateAge);
                        break;

                    case '3' :
                        let updateCode2 = readlineSync.question('Enter the code you want to edit :');

                        let updateAddress = readlineSync.question('Enter the Address new :');
                        Manager.updateAddress(updateCode2, updateAddress);
                        break;

                    case '4' :
                        let updateCode3 = readlineSync.question('Enter the code you want to edit :');
                        let updatePhone = readlineSync.question('Enter the phone new :');
                        while (!REGEX_PHONE.test(updatePhone)) {
                            updatePhone = readlineSync.question('add phone :');
                        }
                        Manager.updatePhone(updateCode3, updatePhone);
                        break;

                    case '5' :
                        let updateCode4 = readlineSync.question('Enter the code you want to edit :');
                        let updateEmail = readlineSync.question('Enter the Email new :');
                        while (!REGEX_PHONE.test(updateEmail)) {
                            updateEmail = readlineSync.question('add email :');
                        }
                        Manager.updateEmail(updateCode4, updateEmail);
                        break;

                    case '6' :
                        let updateCode5 = readlineSync.question('Enter the code you want to edit :');
                        let updateCodeManager = readlineSync.question('Enter the CodeManager new :');
                        Manager.updateCodeManager(updateCode5, updateCodeManager);
                        break;

                    case '7' :
                        let updateCode6 = readlineSync.question('Enter the code you want to edit :');
                        let updateWorkingDay = readlineSync.question('Enter the WorkingDay new :');
                        Manager.updateWorkingDay(updateCode6, updateWorkingDay);
                        break;

                    case '8' :
                        let updateCode7 = readlineSync.question('Enter the code you want to edit :');
                        let updateWage = readlineSync.question('Enter the Wage new :');
                        Manager.updateWage(updateCode7, updateWage);
                        break;

                    case '0' :
                        nice = false;
                        break;
                }
            }


        case '7' :
            Manager.showSalary();
            break;
        case "0":
            isExist = false;
            break;
    }
}

