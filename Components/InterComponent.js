import React from 'react'

function InterComponent() {
    return (
      
<div class="flex flex-col ... mt-20">
  <div><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Validate JSON
</button></div>
<br/>
  <div><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Format/Beautify
</button></div>
<br/>
  <div><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Minify/Compact
</button></div><br/>
<div> <button class="transition duration-500 border-0 text-lg h-12 w-36 bg-red-500 hover:bg-red-700 text-white mt-2 px-3 rounded-md"> <span>Download</span> <i class="fa fa-download" aria-hidden="true"></i></button>
</div>
</div>

  
    )
}

export default InterComponent
