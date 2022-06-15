export default function TableReport (props){
    if (props.dataj.length==[]) return (<h3 className="flex justify-center text-2xl tex-white" >NO COOKIESTAND AVAILABLE</h3>)
    return(
        <table className="w-1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-green-600 bg-emerald-500">Location</th>
              
              {props.hours.map(item=>(<th key={item.toString() } className="border border-green-600 bg-emerald-500"> {item} </th>))}
              <th className="border border-green-600 bg-emerald-500">total</th> 
            </tr>
          </thead>
          <tbody>
          {props.dataj.map(listno=>(
              <tr key={listno.id}>
                  <td className="border border-green-600 bg-emerald-300"  >{listno.location}</td>
                  {/* {(props.dataj["time"]).map(item=>(<td key={item.toString()} className="border border-green-600"> {item} </td>))} */}
                  {listno.time?.map(ele=>(<td className="border border-green-600 bg-emerald-300" key={ele.index}> {ele} </td>))}
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