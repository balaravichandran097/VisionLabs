import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function contact() {
    return (
        <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Technical Team
        </h2>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
          <blockquote>
                    <p class="text-lg font-semibold"> It is very Challenging to work with this product</p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600"> Bala Ravichandran </div>
                    <div class="text-gray-500"> CEO,CTO VisionLabs </div>
                    <div class="mt-3"><Link href='https://www.facebook.com/bala.ravichandran.7/'><a><i class="fab fa-facebook text-blue-900 text-xl mr-2"></i></a></Link><i class="fab fa-twitter text-blue-300 text-xl mr-2"></i> <i class="fab fa-linkedin text-blue-900 text-xl mr-2"></i> <i class="fab fa-instagram text-red-700 text-xl"></i> </div>
                </figcaption>
          </div>
          <div class="w-full md:w-1/2">
            <Image src="/ProfilePic.jpg" alt="Monitoring" width="200" height="200" />
          </div>
        </div>
      
        <div class="flex items-center flex-wrap mb-20">
        <figure class="md:flex bg-white rounded-xl p-8 md:p-0 overflow-hidden"> <Image class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Sathish.jpg" alt="" width="200" height="200"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-lg font-semibold"> This is my first Product to working as a Product Lead and Hope it will succeed</p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600"> SathishKumar Periyasamy </div>
                    <div class="text-gray-500"> Product Lead , VisionLabs </div>
                    <div class="mt-3"> <i class="fab fa-facebook text-blue-900 text-xl mr-2"></i> <i class="fab fa-twitter text-blue-300 text-xl mr-2"></i> <i class="fab fa-linkedin text-blue-900 text-xl mr-2"></i> <i class="fab fa-instagram text-red-700 text-xl"></i> </div>
                </figcaption>
            </div>
        </figure>
        </div>
      
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full md:w-1/2">
          <blockquote>
                    <p class="text-lg font-semibold">We Face Many challenges through out the building phase of our product to get the best out of it</p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600"> Harrys Richardson</div>
                    <div class="text-gray-500"> COO , VisionLabs </div>
                    <div class="mt-3"> <i class="fab fa-facebook text-blue-900 text-xl mr-2"></i> <i class="fab fa-twitter text-blue-300 text-xl mr-2"></i> <i class="fab fa-linkedin text-blue-900 text-xl mr-2"></i> <i class="fab fa-instagram text-red-700 text-xl"></i> </div>
                </figcaption>
          </div>
          <div class="w-full md:w-1/2">
          <Image src="/Harrys.jpg" alt="Monitoring" width="200" height="200" />
          </div>
        </div>
      </section>
    )
}

export default contact
