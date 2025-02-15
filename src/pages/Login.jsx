import { useForm } from "react-hook-form"
import userData from '../data/user.json'
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"
import { useEffect } from "react"

const Login = () => {
    const {user, setUser} = useAuth()

        const {
            register,
            handleSubmit,
            formState: { errors },
            } = useForm()
            
            let navigate = useNavigate()
            let location = useLocation()
            let from = location.state?.from.pathname || '/'

            useEffect(() => {
                user?.email && navigate(from, {
                    replace:true
                })
            },[from, navigate, user.email])

            const onSubmit = (data) => {
                processLogin(data)
            }
            const processLogin = (formData) => {
                const fetchData = async() =>
                {
                    try{
                        const tempUser = userData.find(u => u.email === formData.email && u.password === formData.password) || {}
                        console.log(userData);
                        
                        if(tempUser.email)
                        {
                            localStorage.setItem('uId', tempUser._id)
                            setUser(tempUser)
                        }
                    }
                    catch(error){
                        console.log(error);
                        
                    }
                    
                }
                fetchData()
            }
    return (
        <div>
            Login

            <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span>Email is required</span>}
            
            <input placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span>Password is required</span>}

            <input type="submit" value='Sign'/>
            </form>
        </div>
    )
    }

    export default Login