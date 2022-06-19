import Image from 'next/image'

export default function TableReport (props){
    if (props.dataj.length==[]) return (<h3 className="flex justify-center text-2xl tex-white" >NO COOKIESTAND AVAILABLE</h3>)
    return(
        <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-green-600 bg-emerald-500">Location</th>
              
              {props.hours.map(item=>(<th key={item.id } className="border border-green-600 bg-emerald-500"> {item} </th>))}
              <th className="border border-green-600 bg-emerald-500">total</th> 
            </tr>
          </thead>
          <tbody>
          {props.dataj.map((listno,index)=>(
              <tr key={index}>
                  <td className="border border-green-600 bg-emerald-300"  >
                    {listno.location} 
                  <button onClick={e => props.handleDelete(index,e)}>
                    {console.log(index)}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  </button> 
                  </td>
                  {/* {(props.dataj["time"]).map(item=>(<td key={item.toString()} className="border border-green-600"> {item} </td>))} */}
                  {listno.time?.map(ele=>(<td className="border border-green-600 bg-emerald-300" key={index}> {ele} </td>))}
                  <td className="border border-green-600 bg-emerald-300" >{listno.total}</td>

              </tr>
              ))}
            </tbody>
            <tfoot>
                <tr>
                  <td className="border border-green-600 bg-emerald-500"> Totals</td>
                  {props.totalsum.map(item=>(<td className="border border-green-600 bg-emerald-500" key={item.id}>{item}</td>))}
                  <td className="border border-green-600 bg-emerald-500" >{props.total}</td>
                </tr>
                
            </tfoot>
          
        </table>
    
    )   
}