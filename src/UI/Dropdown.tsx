import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {useState} from 'react';

export interface DropdownProps {
    id: string,
    label: string,
    options: OptionsProps[],
    value: string,
    onChange: (value: string) => void
}
export interface OptionsProps {
    id: string,
    value: string
}

const StyledFormControl = styled.section`
  margin: 5px;
  select {
    padding: 10px;
    border: 1px solid #0b0909;
    border-radius: 5px;
    width: 76%;
  }
`

const Dropdown: React.FC<DropdownProps> = (props) => {
    const {id, label, options, value, onChange} = props;
    const [dropdownValue, setDropdownValue] = useState(value);
    const changeInputValueListener = (event: ChangeEvent<HTMLSelectElement>) => {
        setDropdownValue(event.currentTarget.value)
        onChange(event.currentTarget.value)
    }
    return <StyledFormControl>
        <label htmlFor={id}>{label}</label>
        <select id={id} value={dropdownValue} onChange={changeInputValueListener}>
            {options.map(option => <option key={option.id} value={option.value}>{option.value}</option>)}
        </select>
    </StyledFormControl>
}

export default Dropdown
