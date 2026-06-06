import Link from "next/link";

const Signin = () => {
    return (
        <>
            <h1>Sign in</h1>

            <form >
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
            <Link href={"/createUser"} title={"Create Account"}>{"Create Account"}</Link>
        </>
    )
}

export default Signin