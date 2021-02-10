import React,{useEffect} from 'react'
import axios from "axios";

 const People = () => {


     async function people (ContentType) {
         let url = 'https://swapi.dev/api/people/'


         let results = await fetch(url)

         let data = await results.json()


     }


   // useEffect(()=>{
   //     (async function() {
   //         let url= `https://swapi.dev/api/people/`
   //
   //         const response = await axios.get(url)
   //         console.log(response)
   //
   //     })()
   // })
     return (
         <div>
             <button onClick={people}>People</button>

         </div>

    )
}
export default People












