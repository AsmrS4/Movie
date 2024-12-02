import {toast} from 'react-toastify';

const SuccessToast = (message) => {
    toast.success(`${message}`, {
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

export default SuccessToast ;