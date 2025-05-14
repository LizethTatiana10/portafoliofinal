import {Home} from "../../pages/Home/Home";
import {Historia} from "../../pages/Historia/Historia";
import {Introduccion} from "../../pages/Introduccion/Introduccion";
import  {Experiencia} from "../../pages/Experiencia/Experiencia";


import {Routes, Route} from "react-router-dom";

export function Rutas() {
    return (

        <>
        <Routes>
            <Route path="/inicio" element={<Home/>}></Route>
            <Route path="/proyectos" element={<Historia/>}></Route>
            <Route path="/lizeth" element={<Introduccion/>}></Route>
            <Route path="/experiencia" element={<Experiencia/>}></Route>  

        </Routes> 
       </>
    )
}