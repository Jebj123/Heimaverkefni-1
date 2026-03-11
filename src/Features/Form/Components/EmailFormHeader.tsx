import { CardHeader, CardTitle } from "../../Shared/Components/card";



type EmailFormHeaderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
};

export function EmailFormHeader({value= "submit"} : EmailFormHeaderProps) {   
    return (
        <CardHeader>
                    <div className="flex items-center gap-2">
                        <div className="grow border h-0"></div>
                        <CardTitle>{value}</CardTitle>
                        <div className="grow border h-0"></div>
                    </div>
                </CardHeader>
         
    );
}