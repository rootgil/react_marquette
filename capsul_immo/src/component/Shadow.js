import React from 'react'

function Shadow(props) {
    return (
        <div className={props.className}>
            <img
                src={props.src}
                alt='shadow'
            />
        </div>
    )
}

export default Shadow