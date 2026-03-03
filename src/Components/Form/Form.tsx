import { useState } from "react";
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

export function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [selectedGender, setSelectedGender] = useState("");
    const [isSingle, setIsSingle] = useState("");
    
    const onClick = () => {
      alert(` Nafn : ${firstName} ${lastName} \n Email: ${email} \n Simi: ${phoneNumber} \n Hjúskaparstaða: ${isSingle} \n Kyn: ${selectedGender}`)
    }

    const onClear = () =>{
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setSelectedGender("");
      setIsSingle("");
    }
    

    return (
  <div className="flex place-content-center pb-5">
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
    <Input className="bg-white" placeholder="First Name" value={firstName} type="firstName" onChange={(e) => setFirstName(e.target.value)}/>
    <Input className="bg-white" placeholder="Last Name" value={lastName} type="lastName"onChange={(e) => setLastName(e.target.value)}/>
    <Input className="bg-white" placeholder="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
    <Input className="bg-white" placeholder="Phonenumber" type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
    <Select onValueChange={(e) => {
      setIsSingle(e)
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
    onValueChange={(e) =>{
      setSelectedGender(e)
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
      <Button className="button2 w-90 h-15 text-white font-bold py-2 px-4 rounded" type="reset" onMouseDown={onClear}>Clear</Button>
    </div>
    </CardFooter>
    </form>
    </Card>
    </div>
    )
}