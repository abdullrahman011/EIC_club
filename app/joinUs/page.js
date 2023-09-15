
'use client'

import Link from "next/link"
import { BsPersonFillAdd } from "react-icons/bs"
import { useRouter } from "next/navigation"
import {AiFillHome} from"react-icons/ai"



export const metadata = {
    title: "ETC مصادر المعلومات"
}


export default function Joinus() {
    const router = useRouter();



    return (


        <main className="welcomePage p-10 ">
            
        <div className=" flex justify-between text-white">
          <img src="" />
          <div className=" flex gap-4">
            <div className=" cursor-pointer flex bg-[#3480B1] p-1 rounded-md  " >
              <Link href={'/'} className="flex">
              <button  > الرئيسية</button>
              <AiFillHome className="text-2xl" />
              </Link>
              
            </div>

          
            <Link href="https://filegrabber.ddns.net">
              < button className=" cursor-pointer">مصادر المواد  </button>
            </Link>

          </div>



        </div>

            <div className="text-center text-white text-7xl pt-[25%] lg:pt-[10%]">
                انضم الينا
            </div>
            <div className="   pt-[15vh] pl-[25%] lg:pl-[38%]">

                <div className="  bg-white    w-[50vh] rounded-lg shadow-xl  ">

                    <div className="">


                        <div className=" p-4 ">
                            <form className="text-center mt-8 mb-8" action="https://docs.google.com/forms/d/e/1FAIpQLSes4OEFxYaQRg8JNFwityCnp6T7xDttFhk5ZPJwaSCbtOrWyg/formResponse
 ">
                                <label htmlFor="entry.2146101661"> ادخل بيانات الأنضمام</label><br /><br />
                                <input className=" border-stone-950 border  text-end w-[80%]  " placeholder=" اسم الطالب" type="text" name="entry.2146101661" /><br />
                                <br />
                                <input className=" border-stone-950 border text-end w-[80%]  " placeholder=" رقم الجامعي" type="number" name="entry.1456730216" /><br />
                                <br />
                                <input className=" border-stone-950 border text-end w-[80%] " placeholder=" رقم الهاتف" type="number" name="entry.52443213" /><br />
                                <button type="submit" className=" bg-[#3480B1] p-2 text-white mt-3 cursor-pointer hover:bg-[#286287] rounded-lg hover:scale-125 transition decoration-slice" >ارسال</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </main>
    )

}