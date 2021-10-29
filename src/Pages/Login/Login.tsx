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
    const { formValues, handleInputChange, errors, onSubmit} = useForm<formValuesProps, errorProps>({
        email: "",
        password: ""
    }, {
        email_error: "",
        password_error: ""
    } as errorProps)
    return (
        <form noValidate className={loginPageStyle.loginBg} onSubmit={(e) => onSubmit(e, formSubmit)}>
            <Card className={`${loginPageStyle.m_auto} ${loginPageStyle.cardBg}`}>
                <Input style={{ marginBottom: "1.5rem" }} value={formValues.email} type="text" name='email' required
                    label="Enter Your Email here"
                    error={errors.email_error} helpertext={errors.email_error} onChange={(e) => handleInputChange(e)} />
                <Input style={{ marginBottom: "1.5rem" }} value={formValues.password} type="password" name='password' label="Password"
                    required error={errors.password_error} helpertext={errors.password_error}
                    onChange={(e) => handleInputChange(e)} />
                <div className={loginPageStyle.buttonBg}>
                    <Button type="submit">Submit</Button>
                </div>
            </Card>
        </form>
    )
}

export default Login