let message = '';
let descriptions = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
user.mood = 'happy';
user['"full time"'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const item of keys) {
  message += `${item} : ${user[item]}\n`;
}
console.log(message);

/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
