import {toast} from 'react-toastify';

const WarningToast = (message) => {
    toast.warning(`${message}`, {
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

export default WarningToast ;