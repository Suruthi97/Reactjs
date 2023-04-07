import { useState } from 'react';
import Breadcrumbs3 from '../Components/Breadcrumbs/Breadcrumbs3';
import Datepicker from '../Components/Datepicker';
function Home() {
    const [crumbs]=useState(['Sign Up','Login','Home']);
    const selected=crumb=>{
        console.log(crumb);
    }
    const [path]=useState(['/','/login','/home']);
    return (<div>
        <Breadcrumbs3 path={path} crumbs={crumbs} selected={selected}/>
        <div className="home1">
            <div className="home">Welcome to Healthcare Services portal</div>
        </div>
        <Datepicker/>
    </div>
    );
}
export default Home;