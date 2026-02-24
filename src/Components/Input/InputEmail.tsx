import "./InputStyle.css"

export function InputEmail ({value, onChange}: {value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void}){

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            onChange(e)
            }
    return (
        <div>
        <p>Email: </p>
        <input type="email" name="email" id="email" value={value} onChange={(e) => handleChange(e)}/>
        </div>
    )
}