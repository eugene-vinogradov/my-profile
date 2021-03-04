import avatar from "../images/avatar.jpg";

function AvatarImg() {
  return (
    <div className='info-block-avatar'>
      <img src={avatar} alt='photo'/>
    </div>
    
  )
}

export default AvatarImg;