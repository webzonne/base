import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios'
export default function Home() {

  const initial={
    nombre:''
  }
  const [data,setdata]=useState(initial)

  const {push} = useRouter()

  const handleChange = (e)=>{
    const {name, value} = e.target
    setdata({...data, [name]:value})
  }
  const submit = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('nombre',data.nombre)

      axios.post('/api/hello',formData,{ 
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    push('/')
  }
  return (
    <>
     <h1>HOLA MUNDO</h1>
    <form onSubmit={submit}>
        <input onChange={handleChange} type='text' name='nombre'/>
        <button type='submit'>ENVIAR</button>
    </form>
    </>
   
  )
}
