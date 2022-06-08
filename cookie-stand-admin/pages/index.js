import Head from "next/head"
import Header from "./components/Header"
import Form from "./components/Main"
import Footer from "./components/Footer"


function Home(){
  
  return(
    <>
    <Head><title>Cookie Stand Admin</title></Head>
    <Header/><br/>
    <Form/>
    <Footer/>

    </>
    
  )
}
export default Home