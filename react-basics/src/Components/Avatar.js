import maleavatar from '../images/maleavatar.jpg'




function Avatar( person , size ) {
    return(
        <div> 
         <img src={maleavatar} width={size} height={size} alt={person.name}  />
        </div>
    );

}


export default Avatar ;
