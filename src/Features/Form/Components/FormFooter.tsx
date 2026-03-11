import { Button } from "../../Shared/Components/button";
import { CardDescription, CardFooter } from "../../Shared/Components/card";
import "../formStyle.css"

type FormHeaderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
};


export function FormFooter ({value = "submit"} : FormHeaderProps) {
    return (
    <CardFooter>
    <div className="grid gap-3 w-87 place-content-center">
      <Button className="button w-90 h-15 text-white font-bold py-2 px-4 rounded" type="submit">Submit</Button>
      <div className="flex flex-wrap justify-center">
      <div className="flexflex bg-white h-0.5 w-30 mt-2.5 mr-2 rounded-3xl">
        </div>
      <CardDescription className="grid">{value}</CardDescription>
      <div className="flex bg-white h-0.5 w-30 mt-2.5 ml-2 rounded-3xl">
        </div>
        </div>
      <Button className="button2 w-90 h-15 text-white font-bold py-2 px-4 rounded" type="reset">Clear</Button>
    </div>
    </CardFooter>
    )
}