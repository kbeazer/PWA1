/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
    var dom={
        userName:document.querySelector("#f_username"),
        email:document.querySelector("#f_email"),
        phoneNumber:document.querySelector("#f_phone"),
        ssn:document.querySelector("#f_ssn"),
        password:document.querySelector("#f_password"),
        submit:document.querySelector("#f_submit"),
        dss:document.querySelector("#dss")
    };

    var entryTester={
        nameEntry: /^([A-Z][a-z]*((\s)))+[A-Z][a-z]*$/,
        emailEntry: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
        numberEntry: /^(\d{3})\d{3}-\d{4}$/,
        ssnEntry: /^\d{3}-\d{2}-\d{4}$/,
        passwordEntry: /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{4,15}$/
    };

    var nameAccept=entryTester.nameEntry.test(dom.userName.value),
        emailAccept=entryTester.emailEntry.test(dom.email.value),
        phoneAccept=entryTester.numberEntry.test(dom.phoneNumber.value),
        ssnAccept=entryTester.ssnEntry.test(dom.ssn.value),
        passwordAccept=entryTester.passwordEntry.test(dom.password.value);
    var errorMsg = dom.dss.value;

    dom.submit.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(dom.userName);  //id = is the form input field ID
        emailVerify(dom.email);
        phoneVerify(dom.phoneNumber);
        ssnVerify(dom.ssn);
        passwordVerify(dom.password);


        e.preventDefault();
        return false;
    };


    function validateField(inputName){
        if(inputName==nameAccept){
            console.log('Name was entered correctly');
        }else{
            errorMsg.innerHTML='Please enter your name to continue (Make sure the first letters of your name are capitalized)';
        }
        var pass = entryTester.nameEntry.test(inputName.value);
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    }

    function emailVerify(inputName){
        if(inputName==emailAccept){
            console.log('Email was entered correctly');
        }else{
            errorMsg.innerHTML='Please enter a valid email address to continue (i.e. johnsmith@someaccount.com)';
        }
        var pass = entryTester.emailEntry.test(inputName.value);
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    }

    function phoneVerify(inputName){
        if(inputName==phoneAccept){
            console.log('Phone number was entered correctly');
        }else{
            errorMsg.innerHTML='Please enter a valid phone number to continue (i.e. (555)555-5555 )';
        }
        var pass = entryTester.numberEntry.test(inputName.value);
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    }

    function ssnVerify(inputName){
        if(inputName==ssnAccept){
            console.log('SSN was entered correctly');
        }else{
            errorMsg.innerHTML='Please enter a valid Social Security Number to continue (i.e. 123-45-6789 )';
        }
        var pass = entryTester.ssnEntry.test(inputName.value);
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    }

    function passwordVerify(inputName){
        if(inputName==passwordAccept){
            console.log('Password was entered correctly');
        }else{
            errorMsg.innerHTML='Please enter a valid password to continue (4-15 characters long)';
        }
        var pass = entryTester.passwordEntry.test(inputName.value);
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    }

})();  // end wrapper



