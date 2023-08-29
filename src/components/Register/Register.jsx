import { createNewUser } from "components/redux/redux-auth/auth-operation";
import { useDispatch } from "react-redux";


export const Register = () => {
    const dispatch = useDispatch()

    function SubmitForm(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.nameUser.value === '' || form.email.value === '' || form.password.value === '') {
            alert("Please fill in all the fields")
        };
        const newUser = {
            name: form.nameUser.value,
            email: form.email.value,
            password: form.password.value
        };
        dispatch(createNewUser(newUser));
        form.reset();
    };

    return (
        <form onSubmit={SubmitForm} autoComplete="off" >
            <label htmlFor="nameUser">Name</label>
                <input type="text" id="nameUser" name="nameUser" />
             <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
             <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Submit</button>
        </form>
    )
}