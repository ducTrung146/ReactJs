const user ={
    name: 'Tom',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 80,
  }
  
  function Image(){
  
    return(
        <div>
            <h1>{user.name}</h1>
            <img 
                className="avata"
                src={user.imageUrl}
                style={{ 
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: 50,
                }}
            />
        </div>
    )
  }
  
  export default Image
  
  