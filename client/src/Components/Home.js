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
        axios.post("http://localhost:3001", data).then((response) => {
          console.log("IT WORKED");
            console.log(response.data)
            setimage(response.data)
        });
      };
  return (
      <div>
          <Formik initialValues={initialValues} onSubmit={onSubmit} >
        <Form>
              
                
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
          
          <img src={image.toString()}></img>
          </div>
    </div>
  )
}

export default Home