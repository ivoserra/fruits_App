import { Routes, Route } from "react-router-dom"
import CreateFruit from "./components/CreateFruit"

import ListOfFruits from "./components/ListofFruits"
import Fruit from "./components/Fruit"

import'./App.scss'
import { Header } from "./components/Header"


export default function App(){

    return (
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<ListOfFruits/>}/>
            <Route path='/fruit/:fruitId' element={<Fruit/>}/>
            <Route path='create' element={<CreateFruit/>}/>
        </Routes>
        </>
    )
}