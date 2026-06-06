import {ButtonLink} from "@/app/components/ButtonLink";

export default function createUser() {
    return(
        <>
            <h1>Create User</h1>

            <form >
                <input name="name" placeholder="Name" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Create Account</button>
            </form>
            </>
    )
}