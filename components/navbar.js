import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    function myFunction() {
        const x = document.getElementById("nav")
        
        if (x.className === "nav") {
            x.className += " responsive";
          } else {
            x.className = "nav";
          }

    }

    return ( 
        <nav className="nav" id="nav">
            <div className="logo">
                <Image src="/logo.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
            <p className="icon" onClick={myFunction}>=</p>
        </nav>
     );
}
 
export default Navbar;