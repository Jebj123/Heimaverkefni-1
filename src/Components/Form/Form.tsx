import { useCallback, useEffect, useRef, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../Ui/select";
import "./formStyle.css"
import { Input } from "../Ui/input";
import { Button } from "../Ui/button";
import { Label } from "../Ui/label";
import { RadioGroup, RadioGroupItem } from "../Ui/radio-group";
import useDebounce from "../Hooks/useDebounce.ts"
import { Field, FieldGroup, FieldSet } from "../Ui/field.tsx";


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
        <CardHeader>
    <div className="grid grid-cols-3">
      <div className="flex bg-white h-0.5 mr-2 rounded-3xl mt-5">
        </div>
      <CardTitle className="text-white pb-4 pt-3">Skráningarform</CardTitle>
      <div className="flex bg-white h-0.5 mt-5 ml-2 rounded-3xl">
      </div>
    </div>
    <CardAction></CardAction>
  </CardHeader>
  <CardContent className="grid grid-cols-1">
    <div className="grid gap-3 w-87 place-content-center ">
    <Input 
    className="bg-white" 
    placeholder="First Name" 
    // TODO: Set values to all input fields in the form
    defaultValue={values.firstName}
    type="firstName" onChange={(e) => {onInputChange("firstName", e.target.value)}}/>
    <Input 
    className="bg-white" 
    placeholder="Last Name" 
    type="lastName"
    defaultValue={values.firstName}
    onChange={(e) => {onInputChange("lastName", e.target.value)}}/>
    <Input 
    className="bg-white" 
    placeholder="Email" type="email" 
    defaultValue={email}
    readOnly
    onChange={(e) => {onInputChange("email", e.target.value)}}/>
    <Input 
    className="bg-white" 
    placeholder="Phonenumber" 
    type="number" 
    defaultValue={values.phoneNumber}
    onChange={(e) => {onInputChange("phoneNumber", e.target.value)}}/>
    <Select 
    defaultValue={values.isSingle}
    onValueChange={(e) => {
      onInputChange("isSingle", e)
    }}>
      <SelectTrigger className="w-full max-w-90">
        <SelectValue placeholder="Relationship Status ..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-black">Relationship Status</SelectLabel>
          <SelectItem value="Single" >Single</SelectItem>
          <SelectItem value="Not Single">Not Single</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <RadioGroup className="grid grid-cols-6 w-87 pb-3 pl-7"
    defaultValue={values.selectedGender}
    onValueChange={(e) =>{
      onInputChange("selectedGender", e)
    }}>
        <Label className="text-white" htmlFor="r1">Male:</Label>
        <RadioGroupItem value="Male" id="r1" />
        <Label className="text-white" htmlFor="r2">Female:</Label>  
        <RadioGroupItem value="Female" id="r2" />
        <Label className="text-white" htmlFor="r3">Other:</Label>
        <RadioGroupItem value="Other" id="r3" />
    </RadioGroup>
    </div>
    
  </CardContent>
    <CardFooter>
    <div className="grid gap-3 w-87 place-content-center">
      <Button className="button w-90 h-15 text-white font-bold py-2 px-4 rounded" type="submit">Submit</Button>
      <div className="flex flex-wrap justify-center">
      <div className="flexflex bg-white h-0.5 w-30 mt-2.5 mr-2 rounded-3xl">
        </div>
      <CardDescription className="grid">or</CardDescription>
      <div className="flex bg-white h-0.5 w-30 mt-2.5 ml-2 rounded-3xl">
        </div>
        </div>
      <Button className="button2 w-90 h-15 text-white font-bold py-2 px-4 rounded" type="reset">Clear</Button>
    </div>
    </CardFooter>
    </form>
    </Card>
    }
    <div className="flex justify-center pl-10">
    {!state &&
    <Card className="flex w-80 pl-3 pr-3">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <div className="grow border h-0"></div>
                        <CardTitle>Already filled out form?</CardTitle>
                        <div className="grow border h-0"></div>
                    </div>
                </CardHeader>
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