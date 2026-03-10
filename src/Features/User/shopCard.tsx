import { useState } from "react";
import { Input } from "../Shared/Components/input";
import { Button } from "../Shared/Components/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Shared/Components/card";

export function ShopCard() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const onClick = () => {
    alert(`Skráður \n Nafn : ${name} \n Email: ${email}`)
  }
  
  return (
  <div className="flex justify-center mb-4">
    <Card>
  <CardHeader>
    <CardTitle>Skráningarform</CardTitle>
    <CardDescription>Endilega Skrifaðu Undir</CardDescription>
    <CardAction></CardAction>
  </CardHeader>
  <CardContent className="grid grid-cols-1 gap-3">
   <Input placeholder="name..." value={name} onChange={(e) => setName(e.target.value)}/>
   <Input placeholder="email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
  </CardContent>
  <CardFooter>
    <div className="pl-3">
    <Button  className="flex w-40 text-black"onClick={onClick}>Submit</Button>
    </div>
  </CardFooter>
    
</Card>
<br />
</div>
  )
}