import Countries from './components/Countries'

import './App.css'
import { Suspense } from 'react'

const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {
  

  return (
    <>
   <Suspense fallback={<p>Data loading--------</p>}>
     <Countries countriesPromise={countriesPromise}></Countries>
   </Suspense>
    
    
    </>
  )
}

export default App
