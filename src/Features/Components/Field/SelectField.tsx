import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../Shared/Components/select";


type SelectFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;

}

export function SelectField({ value, placeholder, ...props}: SelectFieldProps){
    return (
        <Select 
    defaultValue={value}
    onValueChange={(e) => {
      props.onChange(e);
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
    )
}