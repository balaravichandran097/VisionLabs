import React from 'react'
import Image from 'next/image'

function about() {
    return (
        <div class="bg-blue-600 h-screen flex justify-center items-center">
    <div class="container-fluid p-3 md:p-32">
        <figure class="md:flex bg-white rounded-xl p-8 md:p-0 overflow-hidden"> <Image class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ProfilePic.jpg" alt="" width="200" height="200"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-lg font-semibold"> This is my first Product to working as a developer and CTO for the Project</p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600"> Bala Ravichandran </div>
                    <div class="text-gray-500"> Software Developer, Excelacom Technologies </div>
                    <div class="mt-3"> <i class="fab fa-facebook text-blue-900 text-xl mr-2"></i> <i class="fab fa-twitter text-blue-300 text-xl mr-2"></i> <i class="fab fa-linkedin text-blue-900 text-xl mr-2"></i> <i class="fab fa-instagram text-red-700 text-xl"></i> </div>
                </figcaption>
            </div>
        </figure>
    </div>
</div>
    )
}

export default about
