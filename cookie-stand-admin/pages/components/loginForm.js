export default function LoginForm(props){
    return(
        <div className=" flex h-screen justify-center">
        <div className="m-auto flex justify-center bg-emerald-300 rounded-lg h-64 w-1/3 ">
            <form onSubmit={props.handelloginSubmit} className="mx-4 space-y-4" >
                <label className="text-xl"><h2>First name:</h2></label>
                <b></b>
                <input 
                type="text"
                placeholder={"User Name"} 
                className="px-10 py-1 text-grey-darkest w-full" 
                required
                value={props.username}
                name="username"
                onChange={(e)=> props.handlsetusername(e.target.value)}
                
                />
                <br></br>
                <label className="text-xl" >password:</label><br/>
                <input 
                type="text"
                placeholder={"password"} 
                className="px-10 py-1 text-grey-darkest w-full" 
                required
                value={props.password}
                name="password"
                onChange={(e)=> props.handlsetpassword(e.target.value)}
                
                /><br></br>

                <button className="bg-emerald-500 w-5/6 px-2 py-2 rounded-full text-1xl tex-white" >submit</button>
            </form> 
    </div>
    </div>
    )

}