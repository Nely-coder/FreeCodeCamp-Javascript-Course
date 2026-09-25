function generatePassword (par) {
  let password = "";
  

  function randomLetter () {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    return str[Math.floor(Math.random()* str.length)];
  }
  
  for (let i = 0; i < par; i++) {
     password += randomLetter();
  }

  return password;

}
const password = generatePassword(10);
console.log(`Generated password: ${password}`);