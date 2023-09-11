// Using switch to show Subject detail

// case   : console.log
// INT201 : "Client Side"
// INT202 : "Server Side"
// INT205 : "Database Management"
const Subject = "INT205"

switch (Subject) {
    case ("INT201") : {
        console.log("Client Side")
        break
    }
    case ("INT202") : {
        console.log("Server Side")
        break
    }
    case ("INT205") : {
        console.log("Database Management")
        break
    }
    default : break;
}





// Now try using If-Else to show Subject detail
if (Subject === "INT201") {
    console.log("Client Side")
} else if (Subject === "INT202") {
    console.log("Server Side")
}else if (Subject === "INT205") {
    console.log("Database Management")
}



// Did you see any difference between Switch and If-Else?




const students = ["Kongphop", "Jittra", "Suksawat", "Supa", "Wanchana", "Walaiporn", "Pasutorn"]
// Make a For Loop program that say "Greeting <student_name>" all students
for ( let name in students){ //for...in
    console.log('Greeting' +' '+ students[name])
}

for ( let name of students){ //for...of
    console.log('Greeting' +' '+ name)
}





const dataSet1 = ["Male", "Female", "Female", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male"]
// Make a program that can count "Male" and "Female" in dataSet
// And then console.log how many count in "Male" and "Female"
// "Male : xx"
// "Female : xx"
let maleCount = 0 //ถ้าเอาไว้ใน loop จะเป็น 0 ตลอดเวลา
let femaleCount = 0
for (value of dataSet1) {
    if (value === 'Female'){
        femaleCount++
    }else if (value === 'Male'){
        maleCount++
    }

}
console.log("Male : " + maleCount)
console.log("Female : " + femaleCount)