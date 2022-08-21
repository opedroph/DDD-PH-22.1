import React from 'react'
import { Sinput } from './style';


const InputText= ({placeholder, value, onChange}) => {
    return (
        <Sinput placeholder={placeholder} value={value} onChange={({target})=>{onChange(target.value)}} ></Sinput>
    );
}

export default InputText;