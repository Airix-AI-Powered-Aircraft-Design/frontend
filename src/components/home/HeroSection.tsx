"use client"
export function HeroSection() {
    return (
        <div className="w-full text-light-text dark:text-dark-text">
            <div className="w-full h-[90vh]  flex flex-col py-2">
                <div className="w-full h-[85%]  px-6 md:px-8">

                    <div className="Name">
                        <h2 className="text-3xl text-light-text dark:text-dark-text mt-1">F-22 Raptor</h2>
                        <p className="text-light-muted dark:text-dark-muted text-[15px] leading-relaxed flex-grow">Air Superiority Fighter</p>

                        <div className="pt-2 px-1 flex gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#EFE9DE]"></div>
                            <div className="w-6 h-6 rounded-full bg-[#EFE9DE]"></div>
                            <div className="w-6 h-6 rounded-full bg-[#8E8B82]"></div>
                            <div className="w-6 h-6 rounded-full bg-[#141413]"></div>
                        </div>
                    </div>
                    
                

                </div>

                <div className="w-full h-[15%]  px-6 md:px-8"></div>
            </div>
        </div>
    )
}
