import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogin } from "../actions/actions";
import Button from "../common/Button/Button";
import Input from "../common/Input";
import { getBrand } from "../i18n/BrandSelector";
import { api } from './../api/index';

function SignInForm(props) {
    const { login, auth } = props;
    const [signButtonLoading, setSignButtonLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    const signInHandler = async () => {
        setSignButtonLoading(true);
        setErrors([]);
        try {
            await login({
                username: username,
                password: password,
            });
            navigate("/");
        } catch (err) {
            setErrors(["Login Fail"]);
            console.log(err);
        }
        setSignButtonLoading(false);
    }
    useEffect(() => {
        if (auth) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute -top-7 -left-7 bg-secondary p-16 rounded-circ z-0" />
                <div className="absolute top-20 right-10 bg-secondary p-4 rounded-circ z-0" />

                <div className="max-w-md w-full space-y-8 z-10">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Welcome to {getBrand()}!
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Email address
                                </label>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    placeholder="Username"
                                    topRounded={true}
                                    onChange={setUsername}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Password"
                                    buttonRounded={true}
                                    onChange={setPassword}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            {errors?.map((err) => {
                                return <p className="text-danger">{err}</p>
                            })}
                        </div>
                        <div>
                            <Button
                                loading={signButtonLoading}
                                disabled={signButtonLoading}
                                onClick={signInHandler}
                            >Let's Go</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (formData) => dispatch(startLogin(formData)),
    }
}
function mapStateToProps(state) {
    const { user } = state
    return { auth: user.auth }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
