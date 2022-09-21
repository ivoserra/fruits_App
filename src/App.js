import { Routes, Route } from "react-router-dom"
import CreateFruit from "./components/CreateFruit"

import ListOfFruits from "./components/ListofFruits"
import Fruit from "./components/Fruit"

export default function App(){

    return (
        <Routes>
            <Route path='/' element={<ListOfFruits/>}/>
            <Route path='/fruit/:fruitId' element={<Fruit/>}/>
            <Route path='create' element={<CreateFruit/>}/>
        </Routes>
      
    )
}