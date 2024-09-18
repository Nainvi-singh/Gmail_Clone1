import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const useGetAllEmails = () => {
    const dispatch = useDispatch();
    const {emails} = useSelector(store=>store.app);
    useEffect(() => {
        const fetchEmails = async () => {
            try {

                const res = await axios.get("http://localhost:8080/api/v1/email/getallemails", {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                      },
                    withCredentials: true
                });
                dispatch(setEmails(res.data.emails));
                console.log(setEmails(res.data.emails));
            } catch (error) {
                console.log(error);
            }
        }
        fetchEmails();
    }, []);
};
export default useGetAllEmails;