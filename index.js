// 1
// let drink = prompt("Виберіть напій із запропонованих: чай, сік, кава");
// switch (drink){
//     case "чай":
//         alert("Ви вибрали чай!");
//         break;
//     case "кава":
//         alert("Ви вибрали каву!");
//         break;
//     case "сік":
//         alert("Ви вибрали сік!");
//         break;
//     default:
//         alert("Такого напою нема, виберіть, будь ласка, із запропонованих");        
// }


// 2
// let day = prompt("Виберіть день тижня");
// switch (day){
//     case "понеділок":
//         case "вівторок":
//             case "середа":
//                 case "четвер":
//                     case "п'ятниця'":
//                         alert("Цей день тижня робочий");
//                         break;
//     case "субота":
//         case "неділя":
//             alert("Цей день тижня вихідний");
//             break;
//     default:
//         console.log("Вибрано неіснуючий день тижня!");
// }


// 3
// let month = Number(prompt("Введіть номер місяця"));
// switch (month){
//     case 1:
//         case 2:
//             case 12:
//                 alert("Пора року - зима");
//                 break;
//     case 3:
//         case 4:
//             case 5:
//                 alert("Пора року - весна");
//                 break;
//     case 6:
//         case 7:
//             case 8:
//                 alert("Пора року - літо");
//                 break;
//     case 9:
//         case 10:
//             case 11:
//                 alert("Пора року - осінь");
//                 break;
//     default:
//         console.log("Задано неправильний номер місяця");
// }


// 4
// let month = Number(prompt("Введіть номер місяця"));
// switch (month){
//     case 1:
//         case 3:
//             case 5:
//                 case 7:
//                     case 8:
//                         case 10: 
//                             case 12:
//                                 alert("У цьому місяці 31 день");
//                                 break;
//     case 4:
//         case 6:
//             case 9:
//                 case 11:
//                     alert("У цьомц місяці 30 днів");
//                     break;
//     case 2:
//         alert("У цьому місяці 28 або 29 днів");
//         break;
//     default:
//         console.log("Задано неправильний номер місяця");
// }


// 5
// let color = prompt("Введіть колір");
// switch (color){
//     case "червоний":
//         alert("стоп");
//         break;
//     case "жовтий":
//         alert("чекати");
//         break;
//     case "зелений":
//         alert("йти");
//         break;
//     default:
//         alert("Спробуйте вибрати інший колір");
// }


// 6
let a = Number(prompt("Введіть перше число"));
let action = prompt("Виберіть операцію (+, -, *, /)");
let b = Number(prompt("Введіть друге число"));
let res;
switch (action){
    case "+":
        console.log("Результат: ", a + b);
        break;
    case "-":
        console.log("Результат: ", a - b);
        break;
    case "*":
        console.log("Результат: ", a * b);
        break;
    case "/":
        console.log("Результат: ", a / b);
        break;
    default:
        console.log("Вибрано неіснуючу операцію");
}