import AXIOS from'axios'
import { useEffect,useState } from 'react';





function Viewimg(){
    const [img,setImg]=useState([]);
    useEffect(()=>{
        AXIOS.get("http://localhost:9000/viewimage").then((res)=>{
         setImg(res.data)
        })
        },[])
    return(
        <>
        {img.map((ls)=>{
            return <img src={`http://localhost:9000/`+ls.url} width="200" height="200"/>
        })}

        </>
    )
}
export default Viewimg;
