import './Container.css'
import Leftbox from './Leftbox.js'
import Rightbox from './Rightbox';

function Container(){
    return(
        <div className="Container">
            <Leftbox/>
            <hr/>
            <Rightbox/>
            <br/>
        </div>

    );}

export default Container;