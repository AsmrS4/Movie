import {toast} from 'react-toastify';

const InfoToast = (message) => {
    toast.info(`${message}`, {
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

export default InfoToast ;