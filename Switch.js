let username = "Mark"




// switch (username) {
//     case ("Good") : {
//         console.log("Hello Good!")
//     }
//     case ("Mark") : {
//         console.log("Greeting Mark!") //ไม่มีเบรค เลยไปทำของ minoto ด้วย
//     }
//     case ("Minoto") : {
//         console.log("Konnijiwa")
//     }
// }



switch (username) {
    case ("Good") : {
        console.log("Hello Good!")
        break
    }
    case ("Mark") : {
        console.log("Greeting Mark!") 
        break //มีเบรคเลยหยุดทำ ทำแค่นี้ ถ้าไม่มีเบรคก็ลื่นปื้ด
    }
    case ("Minoto") : {
        console.log("Konnijiwa")
        break
    }
    default : break;
}