import { useState } from "react";
import { loginOperation } from "../../Redux/Actions/AuthAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


const Login = () => {

    const [inputs, setInputs] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async(e)=>{
        e.preventDefault();
        const datas = await loginOperation(inputs);
        if (!datas.token) {
            return window.alert("işlem Başarısız Tekrar deneyin");
        }
        dispatch({type: "LOGIN", payload: {...datas, isAuth: true}});
        navigate("/");
    }
    return (
        <div>
            <div className="mt-5 formContainer" style={{border: "1px solid gray", borderRadius: "25px", padding: "20px", marginBottom: "25px"}}>
                <form method="post" onSubmit={(e)=>onSubmit(e)}>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={(e)=>setInputs({...inputs, email: e.target.value})} value={inputs.email}/>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setInputs({...inputs, password: e.target.value})} value={inputs.password}/>
                    <button className="btn btn-primary mt-2 w-100 btn-sm" type="submit">Giriş Yap</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
