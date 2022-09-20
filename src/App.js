import { Routes, Route } from "react-router-dom"
import CreateFruit from "./components/CreateFruit"
import Fruit from "./components/Fruit"

import ListOfFruits from "./components/ListofFruits"

export default function App(){

    return (
        <Routes>
            <Route path='/' element={<ListOfFruits/>}/>
            <Route path='/fruit'>
                <Route index path=":fruitId" element={<Fruit/>}/>
            </Route>
            <Route path='create' element={<CreateFruit/>}/>
        </Routes>
      
    )
}