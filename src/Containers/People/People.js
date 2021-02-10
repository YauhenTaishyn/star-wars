import React from 'react'
import axios from "axios";

 const People = () => {


     // async function People (ContentType) {
     //     let url = 'http https://swapi.dev/api/people/1/'
     //
     //     let promise = fetch(url, {})
     //
     //     let results = await Promise.get(promise)
     //     console.log(results)
     // }

    let auth = (name, birth_year, eye_color) => {

         return async () => {

             const authData = {
                 name,
                 birth_year,
                 eye_color
             }

             let url= `http https://swapi.dev/api/people/1/`

             const response = await axios.post(url, authData)
             console.log(response)}

     }

     return (
         <div>
             <button onClick={People}>People</button>

         </div>

    )
}
export default People

// export const auth = (name, birth_year, eye_color) => {
//
//     return async () => {
//
//          const authData = {
//              name,
//              birth_year,
//              eye_color
//         }
//
//         let url= `http https://swapi.dev/api/people/1/`
//
//         const response = await axios.post(url, authData)
//        console.log(response)}
//
//  }
//




// async function getUsers(names) {
//     let jobs = [];
//
//     for(let name of names) {
//         let job = fetch(`https://api.github.com/users/${name}`).then(
//             successResponse => {
//                 if (successResponse.status != 200) {
//                     return null;
//                 } else {
//                     return successResponse.json();
//                 }
//             },
//             failResponse => {
//                 return null;
//             }
//         );
//         jobs.push(job);
//     }
//
//     let results = await Promise.all(jobs);
//
//     return results;
// }








// let response = await fetch(url);
//
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//                    // получаем тело ответа (см. про этот метод ниже)
//     let json = await response.json();
// } else {
//     alert("Ошибка HTTP: " + response.status);
// }