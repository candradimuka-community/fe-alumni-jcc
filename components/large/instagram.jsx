import Link from "next/link"

const Instagram = () => {
    return (
        <div className="min-h-screen container mx-auto pt-16">
            <div className="flex justify-between items-center mb-10 mx-2 md:mx-0">
                <h2 className="text-5xl font-semibold">Our Instagram Post</h2>
                <Link href={''}>
                    <a className="font-medium text-primary-green">
                        View All
                    </a>
                </Link>
            </div>
            <div className="flex gap-4 overflow-auto mx-2 md-mx-0">
                {[1,2,3,4,5,6,7].map((item, index)=>(
                    <div className="min-w-[324px]" key={index}>
                        <div className="w-full h-[231px] bg-slate-100">

                        </div>
                        <div className="w-full h-[184px] bg-slate-200">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Instagram