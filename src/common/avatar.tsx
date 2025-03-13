import React from 'react'

type Props = {
  classes : string
  children? : React.ReactNode
}

export const Avatar = ({classes, children} : Props) => {
  const AvatarClasses = `${classes} rounded-full bg-gradient-to-r from-purple-500 to-red-500 flex justify-center items-center`
  return (
    <div className={AvatarClasses}>
      {children}
    </div>
  )
}
