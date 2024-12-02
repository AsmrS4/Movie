import {toast} from 'react-toastify';

export const ErrorToast = (message) => {
    console.log(message)
    toast.error(`${message}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored'
    });
};

