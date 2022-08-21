import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    return (
        <div className="min-h-screen container mx-auto pt-16">
            <div className="flex justify-between items-center mb-10 mx-2 md:mx-0">
                <h2 className="text-5xl font-semibold">Blog</h2>
                <Link href={''}>
                    <a className="font-medium text-primary-green">
                        View All
                    </a>
                </Link>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="basis-1/2 px-4 py-8 bg-white flex flex-col md:flex-row gap-4">
                    <div className="basis-1/2">
                        <Image src={'https://s3-alpha-sig.figma.com/img/935c/4612/036afcaed624edd1c07692908ea57574?Expires=1661731200&Signature=XL5EJEHOK11eteNSxDAcrtoXYTws31JfOGkL2uttGMKfCZ-6UyfH3PK7MZ78-IDHcQZmoU9bLfpSKX744ZKcm0ILUDbhhA~fOm0K6Q3rwFcbbTRUnY6TqQzde8k8aeawXwIjXPGmfD2Fm4polNwWakMRU7GQHFDiM5tqu19Hv8pVTMaYEz74b-vqvOMgbVGXS4U1subU103SNVrylL2Do7LdyB6XL3oCmGi5OT1-ruXXc6bnNmtYTuST8~CD~4ooVJNiGHRR5neEVGnOJ2iWXfF22WH2C7KGETL3H4W20sBb42rlF7~7rxJp~q0Q5Q3YoBzMe5H-JB7NqzirsyVvHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="blog" width={500} height={500} className="w-full"/>
                    </div>
                    <div className="basis-1/2">
                        <h3 className="text-4xl font-medium mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </h3>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare euismod duis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare euismod auctor...
                        </p>
                        <Link href={''}>
                            <a className="font-medium">Read More</a>
                        </Link>
                    </div>
                </div>
                <div className="basis-1/2 flex gap-4 flex-col">
                    <div className="basis-1/2 px-4 py-8 bg-white flex gap-4">
                        <div className="basis-1/3">
                            <Image src={'https://s3-alpha-sig.figma.com/img/935c/4612/036afcaed624edd1c07692908ea57574?Expires=1661731200&Signature=XL5EJEHOK11eteNSxDAcrtoXYTws31JfOGkL2uttGMKfCZ-6UyfH3PK7MZ78-IDHcQZmoU9bLfpSKX744ZKcm0ILUDbhhA~fOm0K6Q3rwFcbbTRUnY6TqQzde8k8aeawXwIjXPGmfD2Fm4polNwWakMRU7GQHFDiM5tqu19Hv8pVTMaYEz74b-vqvOMgbVGXS4U1subU103SNVrylL2Do7LdyB6XL3oCmGi5OT1-ruXXc6bnNmtYTuST8~CD~4ooVJNiGHRR5neEVGnOJ2iWXfF22WH2C7KGETL3H4W20sBb42rlF7~7rxJp~q0Q5Q3YoBzMe5H-JB7NqzirsyVvHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="blog" width={232} height={260}/>
                        </div>
                        <div className="basis-2/3">
                            <h3 className="text-2xl font-medium mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </h3>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare...
                            </p>
                            <Link href={''}>
                                <a className="font-medium">Read More</a>
                            </Link>
                        </div>
                    </div>
                    <div className="basis-1/2 px-4 py-8 bg-white flex gap-4">
                        <div className="basis-1/3">
                            <Image src={'https://s3-alpha-sig.figma.com/img/935c/4612/036afcaed624edd1c07692908ea57574?Expires=1661731200&Signature=XL5EJEHOK11eteNSxDAcrtoXYTws31JfOGkL2uttGMKfCZ-6UyfH3PK7MZ78-IDHcQZmoU9bLfpSKX744ZKcm0ILUDbhhA~fOm0K6Q3rwFcbbTRUnY6TqQzde8k8aeawXwIjXPGmfD2Fm4polNwWakMRU7GQHFDiM5tqu19Hv8pVTMaYEz74b-vqvOMgbVGXS4U1subU103SNVrylL2Do7LdyB6XL3oCmGi5OT1-ruXXc6bnNmtYTuST8~CD~4ooVJNiGHRR5neEVGnOJ2iWXfF22WH2C7KGETL3H4W20sBb42rlF7~7rxJp~q0Q5Q3YoBzMe5H-JB7NqzirsyVvHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} alt="blog" width={232} height={260}/>
                        </div>
                        <div className="basis-2/3">
                            <h3 className="text-2xl font-medium mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </h3>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare...
                            </p>
                            <Link href={''}>
                                <a className="font-medium">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog