import Button from '../../Components/Button/Button'
import Card from '../../Components/Card/Card'
import Input from '../../Components/Input/Input'
import useForm from '../../hook/useForm';
import loginPageStyle from "./login.module.css";

export type formValuesProps = {
    email: string,
    password: string
}

export type errorProps = {
    email_error: string,
    password_error: string
}

const formSubmit = (values: Object) => {
    console.log(values)
}

const Login = () => {
    const { formValues, handleInputChange, errors, onSubmit} = useForm<formValuesProps>({
        email: "",
        password: ""
    }, {
        email_error: "",
        password_error: ""
    })
    return (
        <form noValidate className={loginPageStyle.loginBg} onSubmit={(e) => onSubmit(e, formSubmit)}>
            <Card className={`${loginPageStyle.m_auto} ${loginPageStyle.cardBg}`}>
                <Input style={{ marginBottom: "1.5rem" }} value={formValues.email} type="text" name='email' required
                    label="Enter Your Email here"
                    error={errors.email_error ? true : false} helpertext={errors.email_error} 
                    onChange={(e) => handleInputChange(e,true, e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false)} />
                <Input style={{ marginBottom: "1.5rem" }} value={formValues.password} type="password" name='password' label="Password"
                    required error={errors.password_error? true: false} helpertext={errors.password_error}
                    onChange={(e) => handleInputChange(e, true, e.target.value.length >= 8)} />
                <div className={loginPageStyle.buttonBg}>
                    <Button type="submit">Submit</Button>
                </div>
            </Card>
        </form>
    )
}

export default Login