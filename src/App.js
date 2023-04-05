import './App.css';
import {useState} from 'react';
import AXIOS from 'axios';

function App() {
  const [image,setImage]= useState({preview:'',data:''});
  const [status,setStatus]=useState('');
  const handlerSubmit = async()=>{
    let formdata = new FormData();
    formdata.append('file',image.data)
         await AXIOS.post("http://localhost:9000/imageup",formdata,{'context-type':'multipart/form-data'}).then((res)=>{
          console.log(res.data.statusText);
          setStatus(res.data.statusText);
         })
  }

  return (
    <div className="App">
      <h1>upload Image</h1>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
     <form onSubmit={handlerSubmit} encType='multipart/form-data'>
      <input type='file'  name="file" onChange={(e)=>{
          const img={
            preview:URL.createObjectURL(e.target.files[0]),
            data:e.target.files[0]


          }
          setImage(img);

      }} />
      <button type='submit'>upload file</button>
      </form>
      <h3>{status}</h3>
    </div>
  );
}

export default App;
