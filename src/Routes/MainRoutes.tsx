import { useRoutes } from "react-router"

import { Form1 } from "../Pages/Form1"
import { Form2 } from "../Pages/Form2"
import { Form3 } from "../Pages/Form3"
import { Form4 } from "../Pages/Form4"
import { NotFound } from "../Pages/NotFound"

export const MainRoutes = () =>{
    
    return useRoutes([
   {path: '/' , element: <Form1/>},
   {path: '/step2' , element: <Form2/>},
   {path: '/step3' , element: <Form3/>},
   {path: '/step4' , element: <Form4/>},
   {path: '*', element: <NotFound/>}
    ])

}