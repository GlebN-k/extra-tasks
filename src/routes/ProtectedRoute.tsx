import React, { ReactComponentElement } from 'react'
import { Navigate } from 'react-router'

type PropsType = {
    children: ReactComponentElement<any>
}

export const ProtectedRoute: React.FC<PropsType> = ( {children}) => {
    const logined = true

    return logined ? children : <Navigate to={'/page/:error'} />
}