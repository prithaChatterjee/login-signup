import { ChangeEvent, FormEvent, useState } from "react"

type InitailValuesTypes<IT> = IT
type errorsValuesTypes<ET> = ET
export default function useForm<IT extends {}, ET extends {}> (initailValues: InitailValuesTypes<IT>, 
    errorsValues: errorsValuesTypes<ET>) {
    const [formValues, setformValues] = useState<any>(initailValues)
    const [errors, seterrors] = useState<any>(errorsValues)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, validtype = true , validationType = true) => {
        setformValues({...formValues, [e.target.name]: e.target.value ? validtype ? e.target.value : 
        formValues[e.target.name] : ""})
        if (e.target.required) {
            if (!e.target.value) {
                seterrors({...errors, [`${e.target.name}_error`]: `${e.target.name} is required`})
            }else{
                delete errors[`${e.target.name}_error`]
                seterrors({...errors})
            }
        } else {
            if (!validationType) {
                seterrors({...errors, [`${e.target.name}_error`]: `${e.target.name.replace(/_/g, " ")} is not Valid`})
            }else{
                delete errors[`${e.target.name}_error`]
                seterrors({...errors})
            }
        }
    }

    const onSubmit = (e: FormEvent, submit : (formValue: IT) => void) => {
        e.preventDefault()
        if (Object.entries(errors).length === 0) {
            submit(formValues)
        } else {
            Object.keys(errors).map(res => errors[res] = `${(res.substring(0, res.length - 5)).replace(/_/g, " ")} is required`)
            seterrors({...errors})
        }
    }

    return {formValues, handleInputChange, errors, onSubmit}
}
