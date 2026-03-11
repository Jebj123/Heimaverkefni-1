import { CardHeader, CardTitle } from "../../Shared/Components/card";

type FormHeaderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string;
};


export function FormHeader ({value = "submit"} : FormHeaderProps) {
    return (
        <CardHeader>
    <div className="grid grid-cols-3">
      <div className="flex bg-white h-0.5 mr-2 rounded-3xl mt-5">
        </div>
      <CardTitle className="text-white pb-4 pt-3">{value}</CardTitle>
      <div className="flex bg-white h-0.5 mt-5 ml-2 rounded-3xl">
      </div>
    </div>
  </CardHeader>
    );
}