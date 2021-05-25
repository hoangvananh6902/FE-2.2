///b1
// let input = prompt("nhap vao mot chuoi: ");
// let  newstr="";
// for(let i=input.length-1;i>=0;i--)
// {
//     newstr+=input[i];
// }
// console.log(newstr);

//b2
// let input=prompt(" nhập chuỗi của bạn: ")
// let strArr=input.split(" ");
// for(let i=0;i<strArr.length;i++)
// {
//     let charArr=strArr[i].split("");
// 	charArr[0]=charArr[0].toUpperCase();
//     strArr[i]=charArr.join("");
// }
// console.log(strArr.join(" "));

//b3
// let arr=[2,5,4,2,6,4,3,8,7,1,1];
// let valu = deduplicate(arr);
// console.log(valu);
// function deduplicate(arr) 
// {
//     let set = new Set(arr);
//     return [...set];
// }

//b4
// let people =[{
//     Name: "Trang",
//     Age: 19,
//     Salary: 300000,
//     Position: "nhân viên"
// },
// {
//     Name: "Minh",
//     Age: 25,
//     Salary: 10000000,
//     Position: "manager"
// },
// {
//     Name: "Nam",
//     Age: 23,
//     Salary: 7000000,
//     Position:"dev"
// }]


//     let input=prompt("Enter Create/Delete/Update/Read")
// switch (input) {
//     case "Create":
//         people.length+1;
//         let newName =prompt("Enter new Name");
//         let newAge =prompt("Enter new Age");
//         let newSalary =prompt("Enter new Salary");
//         let newPosition =prompt("Enter new Position");
//         let newPeople={
//             Name: newName,
//             Age: newAge,
//              Salary :newSalary,
//              Position: newPosition
//         }
//         people.push(newPeople);
//         for(let i=0;i<people.length;i++)
//             {
//                 console.log(`Name: ${people[i].Name}\n Age:  ${people[i].Age}`);
//                 console.log(`Salary: ${people[i].Salary}`);
//                 console.log(`Possition: ${people[i].Position}`);
//                 console.log("***************************************");
//             }
//         break;
//     case "Update":
//         let numberupdate=Number(prompt("Vị trí cập nhật:"));
//         if(numberupdate<0||numberupdate>people.length)
//         {
//             console.log("no data    ");
//         }
//         else
//         {
//             let newNameUpdate=prompt("Enter new name up");
//             let newAgeUpdate=prompt("Enter new Age up");
//             let newSalaryUpdate=prompt("Enter new Salary up");
//             let newPositionUpdate=prompt("Enter new Position up");
//             people[numberupdate-1].Name=newNameUpdate;
//             people[numberupdate-1].Age=newAgeUpdate;
//             people[numberupdate-1].Salary=newSalaryUpdate;
//             people[numberupdate-1].Position=newPositionUpdate;
//             for (let i = 0; i < people.length; i++) 
//             {
//                 console.log(`Name: ${people[i].Name}`);
//             console.log(`Age: ${people[i].Age}`);
//             console.log(`Salary: ${people[i].Salary}`);
//             console.log(`Position : ${people[i].Position}`);
//             console.log("----------------------");
//             }

//         }
//         break;
//     case "Read" :
//         for(let i=0;i<people.length;i++)
//         {
//             console.log(`Name: ${people[i].Name}`);
//             console.log(`Age: ${people[i].Age}`);
//             console.log(`Salary: ${people[i].Salary}`);
//             console.log(`Position : ${people[i].Position}`);
//             console.log("----------------------");
//         }
//         break;
//     case "Delete":
//         let numberdelete=Number(prompt("Enter posotion"));
//         if(numberdelete<0||numberdelete>people.length)
//         {
//             console.log("Can`t delete    ");
//         }
//         else
//         {
//             people.splice((numberdelete-1),1);
//             for (let i = 0; i < people.length; i++) 
//             {
//                 console.log(`Name: ${people[i].Name}`);
//                 console.log(`Age: ${people[i].Age}`);
//                 console.log(`Salary: ${people[i].Salary}`);
//                 console.log(`Position : ${people[i].Position}`);
//                 console.log("----------------------"); 
//             }

//         }
//         break;

//         default:
//         console.log("please enter again!!!!");
//         break;
// }
//b5
let date=prompt("nhập ngày/tháng/năm");
let newdate=date.split("/");
console.log(date);


