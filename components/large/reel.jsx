import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import Image from "next/image"

const Reel = () => {
    return (
        <div className="min-h-screen mx-auto container py-16">
            <div className="flex gap-1 flex-col md:flex-row md:gap-0 md:justify-between md:items-center mx-2 md:mx-0">
                <h2 className="text-5xl font-semibold">
                    Check out our new showreel!!
                </h2>
                <div className="flex gap-5 self-end">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-slate-100 active:bg-slate-200">
                        <ChevronLeftIcon className="w-5 h-5 font-medium"/>
                    </div>
                    <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-slate-100 active:bg-slate-200">
                        <ChevronRightIcon className="w-5 h-5 font-medium"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-4 mt-4">
                <div className="basis-2/3">
                    <Image src={'https://s3-alpha-sig.figma.com/img/1ad6/c1be/99a6f56e639d68fae980d340f24e0b32?Expires=1661731200&Signature=db6RuZMKmXnoz4kPHLFi3BRxoZ~OV1vAJKnKD6D~dVVD8MuGzSyiXKntwTlQ9f-f0OrFOesmUzUiA8ScMIidPnejD8fdeibqJH04iEUQepyjZ8C-2mQb4-G84K3t8JnnKr5zmS0ifZvyhjJ0z69vMn13xHm5fNcuDXwHhJFnPoSTweykE8C4MsEboTB7Kurst2Mk2PNT1VjBFH6egD-b~gy3tkeN7ep5Ow9dzEwPT3psgXey5lbjhPAIJq6qDADAyjkHJGMqCRtSk-ZYLlXkyGmj1zSnliqLUkSwTVcHZFrpZqmB7Nwoez1~qbrykMHIHYeQWDpC7oz-5qeehzsG5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="video" width={891} height={414} />
                </div>
                <div className="basis-1/3 mx-2 md:mx-0">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare euismod duis auctor. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Reel