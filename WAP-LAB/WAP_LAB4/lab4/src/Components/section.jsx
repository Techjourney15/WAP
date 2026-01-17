import Cat from "./Blogs/Cat"
import Dog from "./Blogs/Dog"
import Lion from "./Blogs/Lion"
import Home from "./Blogs/Home"
import Api from "./Blogs/Api"
import {Route, Routes} from 'react-router-dom'

export default function Section(){
    return(
        <>
            <section>
                <Routes>
                    <Route path='/' element={<Home title="Home page"/>} />
                    <Route path='/Dog' element={<Dog/>} />
                    <Route path='/Cat' element={<Cat/>} />
                    <Route path='/Lion' element={<Lion/>} />
                    <Route path='/api' element={<Api/>} />
                </Routes>
            </section>
        </>
    )
}
