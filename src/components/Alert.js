import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.tag} alert-dismissible fade show my-3`} role="alert">
            <strong className='text-capitalize'>{props.alert.tag}:</strong> {props.alert.msg}
        </div>
    )
}
