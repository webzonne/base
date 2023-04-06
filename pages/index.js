import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <h1>HOLA MUNDO</h1>
    <form action='/api/hellow'>
        <button type='submit'>ENVIAR</button>
    </form>
    </>
   
  )
}
