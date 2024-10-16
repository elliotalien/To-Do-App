import React from 'react'
import { Todo } from './components/Todo'

const App = () => {
  return (
    <div className='bg-stone-900 flex justify-center lg:p-4 min-h-screen py-8'>
      <Todo/>
    </div>
  )
}

export default App