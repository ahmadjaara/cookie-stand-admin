function Footer(props){
    return (
        <>
        <footer className="absolute bottom-5 w-full px-6 py-6  text-white bg-emerald-500"> 
           <p>{props.numberofitem} locations world wide</p>
           <p>
           &copy;2021
           </p> 
        </footer>
        </>
    )
}
export default Footer