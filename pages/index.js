import Head from 'next/head'
import React from 'react'
//import TextEditor from '../components/MyEditor'
import Header from '../Components/Header'
import InterComponent from '../Components/InterComponent'
import Footer from '../Components/Footer'
import dynamic from 'next/dynamic'
export default function Home() {


  const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/MyEditor'),
  { ssr: false }
)

const DynamicComponent = dynamic(
  () => import('../components/EditLayout'),
  { ssr: false }
)

  return (
    <>
    <Header />
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 py-5 px-1 h-screen overflow-hidden">
        <div class="sm:col-span-5"><DynamicComponentWithNoSSR /></div>
        <div class="sm:col-span-2"><InterComponent/></div>
        <div class="sm:col-span-5"><DynamicComponent /></div>
        </div>
        <Footer/>
    </>
  )
}
