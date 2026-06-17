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

                    <div className="w-full h-full flex justify-center items-end ">
                        <div className="w-full h-[50%]  flex justify-center items-center">
                             <div className="w-[90%] max-w-5xl h-[140px] rounded-[50%] border border-light-border dark:border-dark-border flex justify-center items-end relative">
                            
                            {/* 360 Control Button */}
                            <button className="absolute bottom-0 translate-y-1/2 w-12 h-12 rounded-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border flex items-center justify-between px-3 text-light-text dark:text-dark-text z-10">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </button>
                            <span className="absolute bottom-0 translate-y-[40px] text-[11px] font-medium text-light-muted dark:text-dark-muted tracking-wide pl-0.5">360&deg;</span>

                        </div>
                        </div>
                    </div>
                    
                

                </div>

                <div className="w-full h-[15%]  px-6 md:px-8"></div>
            </div>
        </div>
    )
}
