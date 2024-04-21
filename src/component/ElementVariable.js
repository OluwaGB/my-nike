import React from 'react'

function ElementVariable(props) {
    const isLoggedIn = props.isLoggedIn;
    let message
    if(isLoggedIn){ message = <div>Welcome Abigail</div>

    }else{
        message=<div>Welcome Guest</div>
    }
  return (
    <div>
      {message}
    </div>
  )
}

export default ElementVariable
