import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
export default function Home() {
  const {push} = useRouter()
  const submit = (e)=>{
    e.preventDefault()
    push('/api/hello')
  }
  return (
    <>
     <h1>HOLA MUNDO</h1>
    <form onSubmit={submit}>
        <button type='submit'>ENVIAR</button>
    </form>
    </>
   
  )
}
