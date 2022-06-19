
function Header(props){
    return(
        <header className="relative px-8 py-6 bg-emerald-500">
             <h1 className="text-4xl tex-white">Cookie Stand Admin</h1>
             
            <button  className="absolute top-8 right-6 bg-gray-100 hover:bg-gray-700 text-black font-bold py-1 px-6 rounded-full ">overview</button>
            <button onClick={props.handelSubmitlogout}  className="absolute top-8 right-40 bg-gray-100 hover:bg-gray-700 text-black font-bold py-1 px-6 rounded-full ">logout</button>

                
        </header>
       
    )
}
export default Header