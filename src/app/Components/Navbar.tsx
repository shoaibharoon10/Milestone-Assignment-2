import Link from "next/link";

export default function Navbar() {
    return( 
    <div className="text-[#caf0f8] bg-[#10002B] text-2xl p-3 font-serif flex ...">
        {/* <div  className="pl-10 flex-1 ... ">
            ENAR Petroleum Refining Facility
        </div> */}
          <Link href="/"  className="pl-2 flex-auto ...">Home</Link>
          <br />
          <Link href="/Files"  className="flex-none w-20  ...">Files</Link>
          <br />
         <Link href="/About" className="flex-none w-20 ..." >About</Link>
         <br />
         <Link href="/Job" className="pl-3 flex-none w-20 ..." >Job</Link>
         <br />
         <Link href="/Programming" className="pr-2 flex-none ..." >Programming</Link>
         <br />
        </div>           
                       
);            
}
