import React, { useState } from 'react' 6.9k (gzipped : 2.7k)
import './ImageGenerator.css'
import default_image form '../Assats/AIimage.svg'
const ImageGenerator = () => {

   const [loading,setloading] = useState(false);
}
   const imageGenerator = asyc () =>{
       if (inputRef.current.value==="")} {
        return 0;
       }
       setLoading(true);
       const response = await fetch(
        "https://pai.openai.com/v1/images/generations",
{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Authorization:
        "Bearer ",
        User-Agent:"FireFox",
    }
}),
    body:JSON.stringify{
        prompt:`${inputRef.current.value}`,
        n:1,
        size:"512x512",
    }
    };

 
      lat data = awaite response.json();
  lat data_array = data.data;
  setImage_url(data_array[0].url);
  setLoading(false);
  


return (
        <div className='ai-image-generator'>
        <div classname="header">Ai Imager <span>Generator</span></div>
        <div className="image-loading">
        <div className="image"><img src={image_url==="/"?default_image:image_url} alt=""/></div>
        <div className="loading">
            <div className={loading?"loading-bar-full":"loading-bar"}></div>
            <div className={loading?"loading-text":"display-none"}>Loading........</div>
        </div>
        </div>
        <div className="search-box">
           <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To see'/>
           <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
        </div>
        </div>

    

export default ImageGenerator