'use client'
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs"
import { BsPersonFillAdd, BsCalendarEventFill, BsGlobe, BsFileEarmarkCodeFill } from "react-icons/bs"
import { HiUserGroup, HiMail } from "react-icons/hi";
import { GoGoal, GoStarFill } from "react-icons/go"
import { FaEye, FaLightbulb, FaBalanceScale } from "react-icons/fa"
import { AiOutlineSearch, AiFillLike } from "react-icons/ai"






export default function page() {




return (
  <div>

    <div className=" h-[500px] welcomePage p-10 ">


      <div className=" flex justify-between text-white">
        <img src="" />
        <div className=" flex gap-4">
          <div className=" cursor-pointer flex w-auto bg-[#3480B1] p-1 rounded-md  " >
            <Link href={'/joinUs'} className="flex">
              <button >انضم الينا</button>
              <BsPersonFillAdd className="text-2xl" />
            </Link>

          </div>

          <button className=" cursor-pointer " onClick={() => {
            window.scrollTo({
              top: 2000,
              behavior: 'smooth'
            })
          }} >التواصل </button>
          <Link href="https://filegrabber.ddns.net">
            < button className=" cursor-pointer">مصادر المواد  </button>
          </Link>

        </div>



      </div>


      <h1 className=" text-gray-100 text-center pt-40  text-7xl font-medium transition-all hover:translate-y-[5px] md:black dark:border-white"> نادي التقنيات الناشئة </h1>
      <div className="text hover:scale-x-95 transition duration-300 text-center pr-24 pt-2 ">
        <p className=" text-white text-4xl text-center font-bold transition-all hover:translate-y-[5px] md:black dark:border-white">
          ETC
        </p>

      </div>

    </div>

    <div className=" m-32  ">



      <div className="text-4xl flex justify-end  gap-2 ">

        آخر الفعاليات
        <BsCalendarEventFill />

      </div>

      <div className=" max-h-[420px] overflow-scroll">

        <div className="lg:w-[1560px] bg-white p-8 m-8 shadow-lg rounded-lg ">

          <p className="text-center">
            <span>#1</span><br />
            here we will talk about any event
          </p>
        </div>

        <div className="lg:w-[1560px] bg-white p-8 m-8 shadow-lg  rounded-lg">

          <p className="text-center">
            <span>#1</span><br />
            here we will talk about any event
          </p>
        </div>

        <div className="lg:w-[1560px] bg-white p-8 m-8 shadow-lg  rounded-lg">

          <p className="text-center">
            <span>#1</span><br />
            here we will talk about any event
          </p>
        </div>



      </div>
    </div>


    <div className="m-32  ">
      <div className=" text-4xl flex justify-end gap-2 ">
        <p className=" "> من نحن</p>
        <HiUserGroup />
      </div>
      <p className=" text-end text-lg mb-24"> نادي تقنية المعلومات الناشئة هو نادي طلابي تطوعي في كلية علوم الحاسب التطبيقية بجامعة الملك سعود. تأسس النادي عام 2023 ليكون مقرٌ للإبداع التقني ومصدر لبث المعرفة التقنية </p>

      <div className=" text-4xl flex justify-end gap-2  ">
        <p className=" "> رؤيتنا</p>
        <FaEye />
      </div>
      <p className=" text-end text-lg mb-24 "> خلق بيئة طلابية ملهمة وتطويرية لرفع الوعي التقني لدى طلبة الجامعة</p>

      <div className=" text-4xl flex justify-end gap-2  ">
        <p className=" "> رسالتنا</p>
        <HiMail />
      </div>
      <p className=" text-end text-lg mb-24 "> المساهمة في رفع الكفاءة وزيادة الوعي الطلابي لمواكبة التطور التقني. وذلك من خلال إقامة الفعاليات والبرامج التي تساهم في تطوير المهارات الذاتية والعلمية والمهنية نحو تحقيق رؤية المملكة 2030</p>

      <div className=" text-4xl flex justify-end gap-2  ">
        <p className=" "> أهدافنا</p>
        <GoGoal />
      </div>
      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p >اكتشاف المواهب والقدرات وتنميتها بشكل إيجابي</p>
        <AiOutlineSearch />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p >  تعزيز الروابط بين الطلاب وغرس روح التعاون </p>
        <AiFillLike />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p  >  تحسين مهارات الطالب في مجالات البيئة المعرفية والتقنية والبرامج الإلكترونية
        </p>
        <BsFileEarmarkCodeFill />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p > تفعيل الطاقات الطلابية الناجحة من خلال عملنا ضمن منظومة ابداعية
        </p>
        <FaLightbulb />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p > المساهمة في خدمة العملية التعليمية في جميع كليات الجامعة من خلال الخدمات التدريبية <br />والاستشارات المقدمة لهم في مجال الحاسب الآلي وتقنية المعلومات</p>
        <AiFillLike />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2">
        <p >    السعي لتمثيل الجامعة داخل المملكة وخارجها<br /> والمشاركة في المعارض المحلية والدولية ذات الاختصاص</p>
        <BsGlobe />
      </div>

      <div className=" text-2xl justify-end text-end m-2 flex gap-2 mb-24">
        <p > المساهمة على حصول الطلاب كافة على أفضل البرامج والشهادات في مجال تقنية المعلومات</p>
        <GoStarFill />
      </div>

      <div className=" text-4xl flex justify-end gap-2  ">
        <p className=" "> قيمنا</p>
        <FaBalanceScale />
      </div>

      <div className=" text-2xl justify-end text-end m-4 flex gap-2 ">
        <p >العمل بروح الفريق </p>
        <GoStarFill />
      </div>

      <div className=" text-2xl justify-end text-end m-4 flex gap-2 ">
        <p > العمل بروح الفريق </p>
        <HiUserGroup />
      </div>

      <div className=" text-2xl justify-end text-end m-4 flex gap-2 ">
        <p > التكامل</p>
        <AiFillLike />
      </div>

      <div className=" text-2xl justify-end text-end m-4 flex gap-2 ">
        <p > الإبداع </p>
        <FaLightbulb />
      </div>

      <div className=" text-2xl justify-end text-end m-4 flex gap-2 ">
        <p > التطور المستمر</p>
        <GoStarFill />
      </div>

    </div>


  </div>

)


}