import { useCallback, useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
} from "../Shared/Components/card.tsx";
import "./formStyle.css"
import { Input } from "../Shared/Components/input.tsx";
import { Button } from "../Shared/Components/button.tsx";
import { Field, FieldGroup, FieldSet } from "../Shared/Components/field.tsx";
import { FormHeader } from "./Components/FormHeader.tsx";
import { FormFooter } from "./Components/FormFooter.tsx";
import { InputField } from "../Components/Field/InputField.tsx";
import { SelectField } from "../Components/Field/SelectField.tsx";
import { RadioGroupField } from "../Components/Field/RadioGroupField.tsx";
import { EmailFormHeader} from "./Components/EmailFormHeader.tsx"


    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");
    //const [email, setEmail] = useState("");
    //const [phoneNumber, setPhoneNumber] = useState("")
    //const [selectedGender, setSelectedGender] = useState("");
    //const [isSingle, setIsSingle] = useState("");


    type FormValuesType = {
      firstName: string,
      lastName: string,
      email: string,
      phoneNumber: string,
      selectedGender: string,
      isSingle: string 
    }

export function Form() {
    // TODO: Remove ref data set, and only use state to keep track of realtime local data (written in input)
    // NOTE: You might want to detach the email from the data set (since it's used to index the localstorage)   

    const [values, setValues] = useState<FormValuesType>({
        firstName: '',
        lastName: '',
        email: "",
        phoneNumber: '',
        selectedGender: "",
        isSingle: ""
    })
   
    const onInputChange = useCallback((key: keyof FormValuesType, value: string) => {
        values[key] = value
    }, [])
  
    const [state, setState] = useState(false)
    

    const onClick = () => {
      const { firstName, email } = values
        localStorage.setItem(email, JSON.stringify(values))
        window.alert(`Hello ${firstName}; email address ${email}`)
    }
   
        const loadEmailRef = useRef<HTMLInputElement>(null)

    const onLoad = useCallback(() => {
        if (loadEmailRef.current && loadEmailRef.current.value) {
            const localStorageValue = localStorage.getItem(loadEmailRef.current?.value)
            if (localStorageValue) {
                const parsedLocalStorageValue: FormValuesType = JSON.parse(localStorageValue)
                window.alert("Welcome Back!  " + "\n " + parsedLocalStorageValue.firstName + " " + parsedLocalStorageValue.lastName)
                loadEmailRef.current.value = ''
                setValues(parsedLocalStorageValue)
                setState(true)
            } else {
                window.alert('Email not found')
            }
        } else {
            window.alert('Enter email')
        }
        console.log(values)
    }, [])

        const onCreate = useCallback(() => {
        if (loadEmailRef.current && loadEmailRef.current.value) {
            const localStorageValue = localStorage.getItem(loadEmailRef.current?.value)
            if (!localStorageValue) {
                setState(true)
            } else {
                window.alert('Email already exists')
            }
        } else {
            window.alert('Enter email')
        }
    }, [])
    // TODO: Use the correct state to connect to debounce state
    const [email, setEmail] = useState("");
    const [debouncedEmail, setDebouncedEmail] = useState(email)

    const handleEmailChange = (e) =>{
      setEmail(e.target.value)
    }

    // Set delay time according to your needs
    // TODO: Write useEffect to repopulate the localstorage after debounce
    // NOTE: The email has to be present for this to work
    
    useEffect(() => {
      const timerId = setTimeout (() =>{
        setDebouncedEmail(email);
      }, 700);

      return () => clearTimeout(timerId)
    },[email]);

    useEffect(() => {
    if (debouncedEmail) {
      console.log('Searching for:', debouncedEmail);
      // Perform search API call here
      const localStorageValue = localStorage.getItem(email)
      if (localStorageValue) {
                console.log("Email Found in Database")
                const parsedLocalStorageValue: FormValuesType = JSON.parse(localStorageValue)
                values.firstName = parsedLocalStorageValue.firstName
                values.lastName = parsedLocalStorageValue.lastName
                values.email = email
                values.phoneNumber = parsedLocalStorageValue.phoneNumber
                values.selectedGender = parsedLocalStorageValue.selectedGender
                values.isSingle = parsedLocalStorageValue.isSingle
            } else {
                console.log("email not found please fill out form")
                values.email = email;
                values.firstName = ""
                values.lastName = ""
                values.phoneNumber = ""
                values.selectedGender = ""
                values.isSingle = ""
            }
          }
          console.log(values)
  }, [debouncedEmail]);
   

    // TODO: If no email is provided, display only the email input, or some other alternative UX

    return (
      <div className="grid place-content-center pb-5">
    {state && 
    <Card className="flex w-100 bg-indigo-950">
      <form onSubmit={onClick}>
      <FormHeader value="SkráningarForm" />
  <CardContent className="grid grid-cols-1">
    <div className="grid gap-3 w-87 place-content-center ">
    <InputField placeholder="First name" value={values.firstName} onChange={(e) => {onInputChange("firstName", e.target.value)}} />
    <InputField placeholder="Last name" value={values.lastName} onChange={(e) => {onInputChange("lastName", e.target.value)}} />
    <InputField placeholder="Email" value={values.email} onChange={(e) => {onInputChange("email", e.target.value)}} />
    <InputField placeholder="Phonenumber" value={values.phoneNumber} onChange={(e) => {onInputChange("phoneNumber", e.target.value)}} />
    <SelectField placeholder="isSingle" value={values.isSingle} onChange={(e) => { onInputChange("isSingle", e)}} />
    <RadioGroupField value={values.selectedGender} onChange={(e) => {onInputChange("selectedGender", e)}} />
    </div>  
  </CardContent>
    <FormFooter value="or" />
    </form>
    </Card>
    }
    <div className="flex justify-center">
    {!state &&
    <Card className="flex w-80 pl-3 pr-3">
        <EmailFormHeader value="Already Filled out form?" />
            <form
                onSubmit={(e) => {
                e.preventDefault()
                onLoad()
                }}
                className="w-full"
                >
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <Input
                                    className="bg-white"
                                    id="email"
                                    autoComplete="off"
                                    type="email"
                                    ref={loadEmailRef}
                                    placeholder="asdf@ntv.is"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <div className="flex flex-col py-4 gap-4">
                        <Button value="load" type="submit" className="button2 p-4 rounded text-white uppercase" >Load</Button>
                        <Button value="create new" type="button" className="button2 p-4 rounded text-white uppercase" onClick={onCreate}>create new</Button>
                    </div>
                </form>
            </Card>
            }
            </div>
    </div>
    )
}