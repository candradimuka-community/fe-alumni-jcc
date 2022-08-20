import { ChevronRightIcon } from "@heroicons/react/outline"
import Button from "../small/button"

const Hero = () => {
    return (
        <div className="bg-slate-100 h-screen bg-[url(https://s3-alpha-sig.figma.com/img/48af/c895/663081ae38c33e7bd67a223f021698b8?Expires=1661731200&Signature=CfQ-CzcSBSeLY-1LiRINfhy-o3zZNq1lOs04h9ttN8DUrCyDlsrI0SsEOCXbHRhnmPQ9Mz44F~Q0qHUCTf14zfemd8JPT3CBUSucBN6a5dRYyXgYoStl~PF1nkeIli52TXuJ7PUtk0SPYiWN9xx0n~hQcHzNQZn9jcWqOo~EtqdLaXGMfjOFcJshoc3UjzRxt6vJg3tUcFUThlMCfh2cjaQOJ66B6qbESRSMpE6w9910~dEB66tYIuQc8AUOz5tPiidwSWN4zYwfOA5EB4-b03bTtRqlliq4FKFL3m-jNm4Kv5F5b4AaFRaiCd6ZW0f1BlbJJtgIzvZ26GegF8MTCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)] bg-cover bg-center bg-no-repeat ">
            <div className="bg-slate-600/50 w-full h-full pt-[215px] ">
                <div className="container mx-auto px-2">
                    <div className="w-full md:w-2/5">
                        <h1 className="text-white text-5xl">Alumni Jabar Coding Camp</h1>
                        <p className="text-[14px] pt-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquam non ac sed enim. Ut ut laoreet malesuada tellus adipiscing. Consequat suspendisse diam bibendum gravida mi, diam elit, pretium. Duis non laoreet eget auctor ornare euismod duis auctor.</p>
                    </div>
                    <Button
                    className="mt-12"
                    variant="yellow">
                        <p className="flex justify-between items-center gap-4 font-semibold">
                            <span>See Our Work</span>
                            <ChevronRightIcon className="w-5 h-5"/>
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero