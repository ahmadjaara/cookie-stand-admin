import Head from "next/head"
import Header from "./components/Header"
import Form from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"
import { hours } from "../data"
import TableReport from "./components/table"
function Home(){
  const [location,setLocation] =useState("")
  const [Minimum,setMinimum] =useState("")
  const [Maximum,setMaximum] =useState("")
  const [Average,setAverage] =useState("")
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
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const [dataj,setdata]=useState([])
const [totalsum,settotalsum]=useState([...Array(14)].map(x =>0))
const [total,settotal]=useState(0)
const [numberofitem,setNoOfItem]=useState(0)

  const handelSubmit = (e) =>{
    e.preventDefault()
    const data=[location,parseInt(Minimum),parseInt(Maximum),Average]
    const listcreator= [...Array(14)].map(x => randomInteger(data[1],data[2]));
    const string={
      location:location,
      time:listcreator,
      total:listcreator.reduce((a, b) => a + b, 0)
    }
    settotal(total+string.total)
    settotalsum([...totalsum].map((e,i)=> e + string["time"][i]))
    setNoOfItem(dataj.length+1)


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
    
  return(
    <>
    <Head><title>Cookie Stand Admin</title></Head>
    <Header/><br/>
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
    <TableReport hours={hours} dataj={dataj} total={total} totalsum={totalsum}/>
    <Footer numberofitem={numberofitem}/>
    </>
    
  )
}
export default Home