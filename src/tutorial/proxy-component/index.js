import React from 'react'
import classnames from 'classnames'

export const Button = ({primary,className,...props}) => <button type="button" className={classnames('btn',primary&&'btn-primary', className)} {...props} >{props && props.title}</button>

export const PrimaryBtn = props => <Button primary {...props}/>

