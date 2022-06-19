import Head from "next/head"
import Header from "./components/Header"
import Form from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"
import { hours } from "../data"
import TableReport from "./components/table"
import LoginForm from "./components/loginForm"
function Home(){
  const[id,setid]=useState(0)
  const [location,setLocation] =useState("")
  const [Minimum,setMinimum] =useState("")
  const [Maximum,setMaximum] =useState("")
  const [Average,setAverage] =useState("")
  const [username,setUsername] =useState("")
  const [password,setPassword] =useState("")
  const[approved,setapproved]=useState(true)
 
  // const [dataj,setdata]=useState("")
  // const [wait,setwait]=useState("")
const handlesetLocation = (location) => {
    setLocation(location)
}
const handlsetMinimum = (Minimum) => {
  setMinimum(Minimum)
}
const handlsetMaximum = (Maximum) => {
  setMaximum(Maximum)
}
const handlsetAverage = (Average) => {
  setAverage(Average)
}
const handlsetusername = (username) => {
  setUsername(username)
}
const handlsetpassword = (password) => {
  setPassword(password)
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const [dataj,setdata]=useState([])
const [totalsum,settotalsum]=useState([...Array(14)].map(x =>0))
const [total,settotal]=useState(0)
const [numberofitem,setNoOfItem]=useState(0)
const handelSubmitlogout = (e) =>{
  e.preventDefault()
  setapproved(true)
  setUsername("")
  setPassword("")
}

// const[deleteEle,setdelete]=useState(dataj)
const handleDelete = (index,e) => {
  e.preventDefault()
  setdata(dataj.filter((v, i) => i !== index));
  settotal(total-dataj[index].total)
  settotalsum([...totalsum].map((e,i)=> e - dataj[index].time[i]))
  setNoOfItem(dataj.length-1)
}

  const handelloginSubmit = (e) =>{
    e.preventDefault()
    const secretdata=[username,password]
    if (username=="admin" && password=="1234"){
      setapproved(false)
    } 


  }
  const handelSubmit = (e) =>{
    e.preventDefault()
    const data=[location,parseInt(Minimum),parseInt(Maximum),Average]
    const listcreator= [...Array(14)].map(x => randomInteger(data[1],data[2]));
    const string={
      id:id,
      location:location,
      time:listcreator,
      total:listcreator.reduce((a, b) => a + b, 0)
    }
    setid(string.id+1)
    settotal(total+string.total)
    settotalsum([...totalsum].map((e,i)=> e + string["time"][i]))
    setNoOfItem(dataj.length+1)
    console.log(dataj)
    


    // const string="{"+"location"+":"+" "+location+","+"minCustomers"+":"+" "+Minimum+","+"maxCustomers"+":"+" "+Maximum+","+"avgCookies"+":"+" "+Average+"}"
    // const waitbutton="Report Table comming soon ..."
    console.log(data)
    // setLocation(e.target.location1)
    // setMinimum(e.target.value)
    // setMaximum(e.target.Maximum1)
    // setAverage(e.target.value)
    // setwait(waitbutton)
    // setdata(string)
    handlsetMinimum(Minimum)
    handlsetMaximum(Maximum)
    handlsetAverage(Average)
    handlesetLocation(location)
    // setdata(string)
    setdata([...dataj, string])

  }
   if (approved) return (
   <LoginForm 
    username={username} 
    password={password} 
    handlsetusername={handlsetusername} 
    handlsetpassword={handlsetpassword} 
    handelloginSubmit={handelloginSubmit}
    />) 
  return(
    <>
    <Head><title>Cookie Stand Admin</title></Head>
    <Header handelSubmitlogout={handelSubmitlogout}/><br/>
    <Form 
    handelSubmit={handelSubmit}  
    Minimum={Minimum}
    Maximum={Maximum}
    Average={Average}
    location={location}
    handlesetLocation={handlesetLocation}
    handlsetMinimum={handlsetMinimum}
    handlsetMaximum={handlsetMaximum}
    handlsetAverage={handlsetAverage}
    dataj={dataj}
    />
    <TableReport hours={hours} dataj={dataj} total={total} totalsum={totalsum} handleDelete={handleDelete}/>
    <Footer numberofitem={numberofitem}/>
    </>
    
  )
}
export default Home