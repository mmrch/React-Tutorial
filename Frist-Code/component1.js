import './index.css';


const name='Murlidhar Chaturvedi';
function Name(props){
   // var today= new Date();
    return(
        <>
            <h1 className="First">Hello {name} , I and all know you will crack me</h1>
            <h2 className="Second">Keep calm </h2>
            <h2>LIVE CLOCK: {props.today.toLocaleTimeString()} </h2>
            <p id='para'>  Hello boiies , welcome to awsome react tutorial here .... , I hope you will enjoy it.</p>
            <ol className='List'>
                <li>Fun</li>
                <li>Learn</li>
                <li>Earn</li>
                <li>Simple</li>
                <li>Funny</li>
                <li>Easy</li>
            </ol>
        </>
    );
}

export default Name;