import React,{useState} from 'react'
import axios from 'axios';


import { Formik, Form, Field } from "formik";
function Home() {

    const initialValues = {
      text:""
        
      };
  

    const [image, setimage] = useState('');
    const onSubmit = (data) => {
        console.log(data)
      axios.post("http://localhost:3001", data, { responseType:'blob'}).then((res) => {
      var binaryData = [];
      binaryData.push(res.data);
     const url= URL.createObjectURL(new Blob(binaryData, {type: "image"}))
        // const url = URL.createObjectURL(res.data);
        console.log("This is url ", url)
        console.log("This is response ",res.data)
        setimage(url)
      }).catch(err => {
        console.log(err)
      })
        // .then((blob) => {
        // const imageObjectUrl = URL.createObjectURL(blob);
        // setimage(imageObjectUrl)
      // });
      
      
      };
  return (
      <div className='w-1/3 flex flex-col justify-center mx-auto my-24 space-y-4'>
          <Formik initialValues={initialValues} onSubmit={onSubmit}  >
        <Form className='space-y-4'>
              
                
                <Field type="text" id="inputCreatePost" className="focus:outline-none focus:ring-offset-0 text-white placeholder-gray-200 text-sm rounded-lg  block w-full p-2.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700" placeholder="" name="text" />
                                        
                       
                  <button
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white active:bg-gradient-to-r-from-indigo-200-via-purple-200-to-pink-200  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
          </Form>
          </Formik>
          

          <div>This is the response
          
        <img src={image}></img>
        <a href={image} download className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white active:bg-gradient-to-r-from-indigo-200-via-purple-200-to-pink-200  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">download</a>
          </div>
    </div>
  )
}

export default Home