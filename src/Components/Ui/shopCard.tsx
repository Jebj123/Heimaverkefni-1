import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {InputName} from "../Input/InputName";
import { useState } from "react";
import { InputEmail } from "../Input/InputEmail";
import "./shopCardStyle.css"

export function ShopCard() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  return (
  <div>
    <Card>
  <CardHeader>
    <CardTitle>Skráningarform</CardTitle>
    <CardDescription>Endilega Skrifaðu Undir</CardDescription>
    <CardAction></CardAction>
  </CardHeader>
  <CardContent>
   <InputName value={name} onChange={(e) => setName(e.target.value)}/>
   <InputEmail value={email} onChange={(e) => setEmail(e.target.value)}/>
  </CardContent>
  <CardFooter>
    <button type="submit"className="submitCardButton"onClick={() => alert("Takk fyrir að skrifa undir!" + "\n" + "Nafn: " + name + "\n" + "Póstfang: "+ email)}>Skráðu þig!</button>
  </CardFooter>
</Card>
<br />
</div>
  )
}