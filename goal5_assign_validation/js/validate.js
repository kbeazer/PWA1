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

    var userEntries={
        nameEntry: /^([A-Z][a-z]*((\s)))+[A-Z][a-z]*$/,
        emailEntry: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
        numberEntry: /^(\d{3})\d{3}-\d{4}$/,
        ssnEntry: /^\d{3}-\d{2}-\d{4}$/,
        passwordEntry: /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{4,15}$/
    };
    dom.submit.onsubmit = function(e){


        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(id);  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        var nameAccept=userEntries.nameEntry.test(dom.userName.value),
            emailAccept=userEntries.emailEntry.test(dom.email.value),
            phoneAccept=userEntries.numberEntry.test(dom.phoneNumber.value),
            ssnAccept=userEntries.ssnEntry.test(dom.ssn.value),
            passwordAccept=userEntries.passwordEntry.test(dom.password.value);

        if (inputName.name === 'id name goes here'){
            var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

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
    };

})();  // end wrapper



