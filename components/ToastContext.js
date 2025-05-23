import React, { createContext, useState, useContext } from 'react';
import ToastStyles from './ToastStyles';

export const ToastContext = createContext();

const [showToast, setShowToast] = useState(false);



return (
    <ToastContext.Provider value={{  }}>
        {children}
    </ToastContext.Provider>
);