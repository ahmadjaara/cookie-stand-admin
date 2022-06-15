import { useState } from "react"

function Form(props){
    // const [location,setLocation] =useState("")
    // const [Minimum,setMinimum] =useState("")
    // const [Maximum,setMaximum] =useState("")
    // const [Average,setAverage] =useState("")
    // const [dataj,setdata]=useState("")
    // const [wait,setwait]=useState("")

    // const handelSubmit = (e) =>{
    //   e.preventDefault()
    //   const data=[location,Minimum,Maximum,Average]
    //   const string="{"+"location"+":"+" "+location+","+"minCustomers"+":"+" "+Minimum+","+"maxCustomers"+":"+" "+Maximum+","+"avgCookies"+":"+" "+Average+"}"
    //   const waitbutton="Report Table comming soon ..."
    //   console.log(data)
    //   setwait(waitbutton)
    //   setdata(string)
    // }
    if (props.dataj.length==9) return (<p className="flex justify-center text-2xl tex-white" > please refresh</p>)
    return(
        <>
        <div className="relative mx-10 my-1 bg-emerald-300 rounded-lg h-70 w-50  ">
       
          <form className="" onSubmit={props.handelSubmit}  > 

              <h2 className="flex justify-center text-2xl tex-white" >Create Cookie Stand</h2><br/>
              <div className="grid grid-cols-9 place-items-center">
              <label className="pl-24">location</label>
              
              <input 
              type={"text"} 
              placeholder={"insert the location "} 
              className="pl-2 w-5/6 col-start-2 col-span-9 "
              required
              value={props.location}
              name="location1"
              onChange={(e)=> props.handlesetLocation(e.target.value)}
              // onChange={props.handlesetLocation}
              /><br/><br/>
              
              
              </div>
              
              
              <div className="grid grid-rows-1 grid-flow-col gap-4 place-items-center" >

                <div> 

                  <label className="text-1xl tex-white">Minimum Custom per Hour</label><br/>
                  <input 
                  type={"text"} 
                  placeholder={"insert the MC/Hr "} 
                  className="pl-2"
                  required
                  value={props.Minimum}
                  name="Minimum1"
                  // onChange={props.handelSubmit}
                  onChange={(e)=> props.handlsetMinimum(e.target.value)}
                  // onChange={props.handlsetMinimum}
                  />

                </div>

                <div >

                  <label className="text-1xl tex-white">Maximum Custom per Hour</label><br/>
                  <input 
                  type={"text"} 
                  placeholder={"insert the MC/Hr "} 
                  className="pl-2" 
                  required
                  value={props.Maximum}
                  name="Maximum1" 
                  onChange={(e)=> props.handlsetMaximum(e.target.value)}
                  // onChange={props.handlsetMaximum}
                  />

                </div>

                <div>

                  <label className="text-1xl tex-white" >Average Cookies per Sale</label><br/>
                  <input 
                  type={"text"} 
                  placeholder={"insert the Average "} 
                  className="pl-2"
                  required
                  value={props.Average}
                  name="Average1"
                  // onChange={props.handlsetAverage}
                  onChange={(e)=>props.handlsetAverage(e.target.value)}
                  
                  />

                </div>

                <div className="flex w-full">
                  <button  className="bg-emerald-500 w-5/6 px-4 py-2 rounded-none text-1xl tex-white">Create</button>

                </div>
                
              </div>
              

          </form><br/>
          

        </div>
        
        {/* <p className="flex justify-center">
            {props.wait}
            
        </p><br/>
        <p className="flex justify-center">{props.dataj}</p> */}
  
        {/* <p>
         {props.Minimum}
         <br></br>
         {props.Maximum}
         <br></br>
         {props.Average}
        </p> */}
        {/* <p>{props.Minimum}</p>
        <p>{props.Maximum}</p>
        <p>{props.Average}</p> */}
        </>
    )
}

export default Form