import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios'
import FileBase from "react-file-base64";
import modelo from "../model/modelo";
import db from '../lib/db';
import Image from 'next/image'

// SERVER
export async function getServerSideProps() {


  try {
    await db()
    const respuestaBase = await modelo.find({})
    const respuesta = respuestaBase.map((e) => {
      const res = e.toObject()
      res._id = res._id.toString()
      return res
    })
    return { props: { respuesta } }
  } catch (err) {
    console.log(err)
    return { props: { respuesta: [] } }
  }

}
// SERVER FINAL



export default function Home({ respuesta }) {
  console.log(respuesta)
  const initial = {
    nombre: '',
    image: ''
  }
  const [data, setdata] = useState(initial)

  const { push } = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  const handleFileChange = (file) => {
    setdata({ ...data, image: file.base64 })
  }
  const submit = (e) => {
    e.preventDefault()

    axios.post('/api/hello', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
    push('/')
  }
  return (
    <>
      <h1>HOLA MUNDO</h1>
      <form onSubmit={submit}>
        <input onChange={handleChange} type='text' name='nombre' /><br /><br />
        <FileBase
          type="file"
          multiple={false}
          onDone={handleFileChange}
        /><br /><br />
        <button type='submit'>ENVIAR</button>
      </form><br /><br />
      <h1>RESULTADO</h1>
      {respuesta &&
      <img src={respuesta[1].image}></img>
       }
    </>

  )
}
