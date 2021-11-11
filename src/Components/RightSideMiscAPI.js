//import axios from 'axios';
import { useState } from 'react';

function RightSideMiscAPI() {
    const [ joke ] = useState();
    
    // const handleDadJoke = async() => {
        
    //         await axios
    //             .get(`https://icanhazdadjoke.com/`)
    //             .then(
    //                 (res) => {
    //                     setJoke(res.data)
    //                 },
    //                 (error) => console.log('get', error)
    //             )
    //             .then((res) => console.log(res))
    //             .catch((c) => console.warn('catch', c));
        
    // }

    return (
        <div className="right-column-api">
            {/* <button className="dad-joke">Click here for a dad joke!</button> */}
            <p>{joke}</p>
        </div>
    );
};

export default RightSideMiscAPI;
