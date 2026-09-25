function maskEmail(email) {
  let sliced = email.slice(1,email.indexOf("@")-1);
  let repeatd = "*".repeat(sliced.length);
  return email.replace(sliced, repeatd);
   
}

let email = "apple.pie@example.com";
email = "freecodecamp@example.com";
email = "info@test.dev";
email = "user@domain.org";


console.log(maskEmail(email));