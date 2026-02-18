import { MessageCircle, Mail, MapPin, Facebook,} from "lucide-react";

function ContactCards() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-20">
      <div className="flex items-center justify-center gap-10 flex-col">

        {/* WhatsApp Card */}
        <a href="tel:+995 592 43 66 51"  className="bg-slate-900 h-40 w-72 flex justify-between rounded-md duration-100 cursor-pointer hover:bg-slate-800">
            <div className="flex flex-col justify-end m-5 gap-3">
                <MessageCircle className="text-green-500 bg-slate-800  hover:bg-green-500 hover:text-slate-900 rounded-sm" size={30}/>
                <h2 className="text-white">WhatsApp</h2>
                <p className="text-green-500">Instant</p>
            </div>
           <p className="text-amber-500 mt-3 text-[12px]  rotate-35 h-8 flex justify-center items-center">Available 24/7</p>
        </a>
        

        {/* Email Card */}
        <a href="https://www.facebook.com/profile.php?id=61580045558141" className="bg-slate-900 h-40 w-72 flex justify-between rounded-md duration-100 cursor-pointer hover:bg-slate-800">
            <div className="flex flex-col justify-end m-5 gap-3">
                <Facebook className="text-white bg-slate-800 hover:bg-blue-700 hover:text-slate-800 rounded-sm" size={30} />
                <h2 className="text-white">Facebook</h2>
                <p className="text-amber-500 text-[10px] w-40">Georgia Adventure Seasons • GEOAS</p>
            </div>
            <p className="text-amber-500 mt-3 text-[12px] rotate-35 h-8 flex justify-center items-center">Available 24/7</p>
        </a>

        {/* Location Card */}
        <a href="https://www.google.com/maps/place/%E1%83%A4%E1%83%90%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%A3%E1%83%A0%E1%83%98/@42.353396,44.6739987,5149m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40451f8fb120a1ef:0xe3e7861c91d550a0!8m2!3d42.3521585!4d44.6875131!16zL20vMGJ2NWtm!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="bg-slate-900 h-40 w-72 flex justify-between rounded-md duration-100 cursor-pointer hover:bg-slate-800">
            <div className="flex flex-col justify-end m-5 gap-3">
                <MapPin className="text-amber-500 bg-slate-800 hover:bg-amber-500 hover:text-slate-800 rounded-sm" size={30} />
                <h2 className="text-white">Phasanauri</h2>
                <p className="text-amber-500 text-[10px] w-40">Gudauri</p>
            </div>
            <p className="text-amber-500 mt-3 text-[12px] rotate-35 h-8 flex justify-center items-center">+ All of Dusheti</p>
            
        </a>
        

      </div>
    </div>
  );
}



export default ContactCards