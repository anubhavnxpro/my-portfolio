import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const emailSuccess = () => {
    toast.success("Email sent successfully", {
        position: toast.POSITION.TOP_RIGHT
    })
}

const incompleteDetails = (msg) => {
    toast.warning(msg, {
        position: toast.POSITION.TOP_RIGHT
    })
}

const badRequest = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT
    })
}

export {emailSuccess, incompleteDetails, badRequest}