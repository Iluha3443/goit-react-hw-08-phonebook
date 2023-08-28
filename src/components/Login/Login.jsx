export const Login = () => {

  
    return (
        <form onSubmit={SubmitForm} autoComplete="off" >
             <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
             <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Submit</button>
        </form>
    )
}