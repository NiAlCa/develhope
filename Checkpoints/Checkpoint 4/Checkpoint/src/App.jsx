
import './App.css'
import axios from "axios";
import { useEffect } from "react";


function App() {


      const API_ENDPOINT = "https://my-json-server.typicode.com/typicode/demo/posts";

      const fetchData = async () =>{

        const response = await axios.get(API_ENDPOINT);

        console.log(response.data , "Fetch");
        
      }

      const postData = async () =>{
        const response = await axios.post(API_ENDPOINT,{
          id: 20,
          title: "post 20"
        });
        console.log(response.data, "Post");
      }

      const updateData = async () =>{
        const response = await axios.put(`${API_ENDPOINT}/2`,{
        title: "title 3",}
        )

        console.log(response.data, "update");
      }

      const deleteData = async () =>{
        const response = await axios.delete(`${API_ENDPOINT}/1`);
        console.log(response.data, "delete");
      }

      useEffect( ()=> {
       
        fetchData();
        postData();
        updateData();
        deleteData();


        })



      

  return (
    <div>

      
    </div>
  )
}

export default App
