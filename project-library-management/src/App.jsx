import React from 'react'
import { Route, Routes } from 'react-router'
import AddBook from './page/AddBook'
import ViewBook from './page/ViewBook'
import Header from './components/Header'

const App = () => {
  return (

    <div>
      <Header/>
    <Routes>
      <Route index element="/"/>
      <Route path='/add-book' element={<AddBook/>}/>
      <Route path='/view-book' element={<ViewBook/>}/>
    </Routes>
    </div>
  )
}

export default App
