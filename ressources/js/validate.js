function error_message(term) {
   switch(term) {
        case 'email':
        case 'name':
        case 'message':
        alert("Error! You can only use ('A-Z | 0 - 9 | - | _ | . |') ('| = or').");
        return false;
        break;
        case 'zip':
        alert("Error! You can only digits ('2345-6789 | 123456, 123456789').");
        break;
        return false;
        default:
            alert("Something went wrong!");
    }
}
function validateForm() {
    let form = document.forms;
    let name = form['myForm']['name'].value;
    let email = form['myForm']['email'].value;
    let zip = form['myForm']['zip'].value;
    let referrer = form['myForm']['referrer'].value;
    let message = form['myForm']['message'].value;

    console.log(form);
    console.log(name);
    console.log(email);
    console.log(zip);
    console.log(referrer);
    console.log(message)

    debugger;
    pattern_email = /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i
    pattern_1 = /^[a-zA-Z\s]{2,30}$/i;
    regex_zip = /^[0-9]{5}(?:-[0-9]{4})?$/
    if (!pattern_email.test(email))
        return error_message("email")
    
    if (!(pattern_1).test(name))
        return error_message("name")

    if (!pattern_1.test(message)) 
        return error_message("message")
    
    if (!pattern.test(regex_zip)) 
        return error_message("zip")

    return true;
}