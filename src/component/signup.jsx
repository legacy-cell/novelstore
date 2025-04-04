import {  Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [success, setSuccess] = useState("");
    const [error, setError]= useState("");
    const [loading, setLoading] = useState("");
    // create the function handle submissin of data
    const submit = async (e) => {
        e.preventDefault();
        setLoading("Please wait as we upload your data!");
        try {
            // append the updated hook versions into form data
            console.log(phone)
            const data = new FormData();
            data.append('username', username);
            data.append('email', email);
            data.append('password', password);
            data.append('phone', phone);
            // we use axios to post dat to our back end API
            const response = await axios.post(
                "https://kangethevictor.pythonanywhere.com/api/signup",
                data
            )
            // update success message upon succesful data submission
            setSuccess(response.data.success);
            setLoading("")


        } catch (error) {
            setLoading("");
            setError(error.message);

            
        }
    }    



    return(
            <div className="row justify-content-center mt-4"> 
                <div className="col-md-6 card shaow p-4">
                    <h2>Signup</h2>
                    {loading}
                    {success}
                    {error}
                    
                    <form onSubmit={submit}>
                        <input
                        type='text'
                        className="form-control"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                        <br />

                        
                        <input
                        type='email'
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <br />
                        
                        <input
                        type='password'
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <br />
                        
                        
                        <input
                        type='number'
                        className="form-control"
                        placeholder="Enter Phone"
                        // value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        />
                        <br />
                        
                        <br />
                        <button type='submit' className="btn btn-primary">Signup</button>

                    
                    </form>
                    <p>Already have an account? </p>
                    <Link to='/signin'>signin</Link>
                </div>
               
            </div>
    )


}
export default Signup;