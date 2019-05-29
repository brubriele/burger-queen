import React from 'react'

const SignUp = ({ onSubmit }) => {
    return (
        <div>
            <h1>Sign up</h1>
            <label> User
                <select>
                    <option value="saloon">SALÃO</option>
                    <option value="kitchen">COZINHA</option>
                </select>
            </label>
            <form onSubmit={onSubmit}>
                <label>
                    Email
              <input
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </label>
                <label>
                    Password
              <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;