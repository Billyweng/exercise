

const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / heightJhon ** 2;
/* ---------------------" ** " 是指平方------------------------*/

const markHigherBMI = BMIMark > BMIJhon;

console.log(BMIMark, BMIJhon, markHigherBMI);

if (BMIJhon < BMIMark) {
    console.log(`Mark is heavy, his BMI is (${BMIMark}) higher than Jhon (${BMIJhon})`);
} else {
    console.log(`Jhon is heavy`);
}





/* if (條件內容) {
執行事件
} else如果不是上述內容執行後續事件{
    執行事件
}           */

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`${century}世紀`);







const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log('Cool! 23 is an amzaing number');
} else {
    console.log('Ok you are not 23');
}

console.log(birthYear);



const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision); /* || 是指 "或" 的意思*/
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = false;
/* console.log(hasDriverLicense && hasGoodVision && !isTired); */



if (hasDriverLicense && hasGoodVision && !isTired) {  /* !isTired 代表這個直要是false 才成立 而非值得相反 */
    console.log('She is able to drive');
} else {
    console.log('Someone else should drive....');
}




const scoreDolphins = (97 + 112 + 70) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}   