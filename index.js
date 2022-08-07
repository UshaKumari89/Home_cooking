// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);

// let userFirstName = id("userFirstName"),
//     userLastName = id("userLastName"),
//     email = id("email"),
//     password = id("password"),
//     form = id("form"),
//     errorMsg = classes("error"),
//     successIcon = classes("success-icon"),
//     failureIcon =  classes("failure-icon");
   

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//       check(userFirstName, 0 , "First name cannot be blank");
//       check(userFirstName, 1 , "Last name cannot be blank");
//       check(email, 2, "Email cannot be blank");
//       check(password, 3 , "Password cannot be blank");
       

//     })
//     function check(id , serial , message){

//         if(id.value.trim() === ''){
//             errorMsg[serial].innerHTML = message;
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
    
//             }else{
//                 errorMsg[serial].innerHTML = " ";
//                 failureIcon[serial].style.opacity = "0";
//                 successIcon[serial].style.opacity = "1";
//             }
//     }
