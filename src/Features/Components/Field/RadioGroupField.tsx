import { Label } from "../../Shared/Components/label";
import { RadioGroup, RadioGroupItem } from "../../Shared/Components/radio-group";



type RadioGroupFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioGroupField ({value, ...props}: RadioGroupFieldProps){
    return(
        <RadioGroup className="grid grid-cols-6 w-87 pb-3 pl-7"
        defaultValue={value}
        onValueChange={(e) =>{
        props.onChange(e)
    }}>
        <Label className="text-white" htmlFor="r1">Male:</Label>
        <RadioGroupItem value="Male" id="r1" />
        <Label className="text-white" htmlFor="r2">Female:</Label>  
        <RadioGroupItem value="Female" id="r2" />
        <Label className="text-white" htmlFor="r3">Other:</Label>
        <RadioGroupItem value="Other" id="r3" />
    </RadioGroup>
    )
}