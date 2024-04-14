import {database, onValue, ref} from "../../config/firebaseConfig"
import React,{useEffect, useState} from "react";
import Styles from "./fetchBlogs.module.css"
import AlertSignIn from "../signIn/signIn";

const FetchBlogs = ({setIsloading,blogFetch}) => {
 
  const [blogs,setBlogs] = useState([])
  const [PsuedoName, setPsuedoName] = useState("");
  

 useEffect(()=>{
    const blogref = ref(database,'post/')
    onValue(blogref,(snapshot)=>{
        const data = snapshot.val()
        const bloglist = data ? Object.keys(data).map(key=>({
            id:key,
            ...data[key]
        })) : [];
        setBlogs(bloglist)
    })
 },[])

 const handelPsuedoNameChange = (val) => {
    setPsuedoName(val);
  };



 console.log(blogs)

  return (
    <div className={Styles.fetchbBogComponent}>
       <AlertSignIn
         onValueChange={handelPsuedoNameChange}
         setIsLoading={setIsloading}
         blogFetch={blogFetch}
       /> 
      <h1>blogs</h1>
    </div>
  );
};

export default FetchBlogs;
