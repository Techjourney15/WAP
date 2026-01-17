import {Link} from 'react-router-dom'
export default function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dog'>Dog</Link></li>
                    <li><Link to='/cat'>Cat</Link></li>
                    <li><Link to='/lion'>Lion</Link></li>
                    <li><Link to='/api'>API</Link></li>
                </ul>
            </nav>
        </>
    )
}

