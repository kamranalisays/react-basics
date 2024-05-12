import Avatar from '../Components/Avatar.js'

// passing properties to child component "Avatar"


function Profile()
{
    return(
        <div>
            <Avatar 
              size={20}
              person={{
                name: 'Ali'
              }}
            />
           </div>
    );

}


export default Profile;