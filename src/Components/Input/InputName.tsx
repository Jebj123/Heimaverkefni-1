import "./InputStyle.css"

export function InputName ({value, onChange}: {value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void}){

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            onChange(e)
            }
    return (
        <div>
        <p>Nafn:</p>
        <input type="text" name="name" id="name" value={value} onChange={(e) => handleChange(e)}/>
        </div>
    )
}