import { Field } from "../../Shared/Components/field";
import { Input } from "../../Shared/Components/input";

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

export function InputField({ value, placeholder, ...props}: InputFieldProps){
    return (
    <Field>
        <Input 
        placeholder={placeholder}
        className="bg-white" 
                // TODO: Set values to all input fields in the form
        defaultValue={value}
        onChange={(e) => {
            props.onChange(e);
        }}
        />
    </Field>
    )
}