// for syntax
for (let i = 0 ; //ประกาศตัวนับตัวแรก
     i <= 5 ; //ทำถึง i มีค่าเท่าไหร่
      i++ // ทำ 1 ครั้ง บวกค่าไปเท่าไหร่
      ) {
    console.log("This is For loop")
}


// for ...of
const array1 = [5,10,15,20,25]
for (data of array1) {  // for ...of เอาไว้ใช้กับ array loop ออกมาแต่ละตัวใน array นี้มีอะไรบ้าง
    console.log(data)
}


//for...in
const object1 = {a:2, b:3, c:9}
for(data in object1){ //for...in เอาไว้เรียกดู properties ใน objects
    console.log(object1[data])
    // console.log(data) //a b c
    // console.log(object1[data]) // 2 3 9
    // console.log(object1) //{a:2, b:3, c:9}
    // console.log(object1.a) //2
    // การเรียก ใน loop
}


// for...in
const student = {
    firstname: "Foton",
    lastname: "Rakpinit",
    age: 21,
}
for (property in student) {
    console.log(student[property]) // "Foton" "Rakpinit" 21
}


// Do first, then check ให้ทำสิ่งนี้ ในขณะที่เงื่อนไขนี้เป็นจริง
let counter = 20
do { //ทำก่อน 1 รอบ
    counter++
    console.log(counter)
}
while (counter < 5) ; //ทำอันนี้ถ้าตรงก็ไปทำ do อีกรอบ จนจะไม่ตรง


// Loop while
let messageCount = 0
while (messageCount < 5)  {// check เงื่อนไข ในวงเล็บก่อน
    console.log("Hello") // แล้วมาทำต่อในปีกกา
    messageCount++
}