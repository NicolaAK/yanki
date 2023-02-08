import React, { useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer, ArrowContainer, Text, Placeholder } from './styled';

interface IArrow {
    value: string;
    label: string;
}
export interface IProps {
    options: IArrow[];
    width?: number;
    onChange?: (arg0: string) => void;
    placeholder?: string;
    value?: string;
}

const Dropdown = ({ options, width, onChange, placeholder, value }: IProps) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const toggling = () => setIsOpenDropdown(!isOpenDropdown);

    const onOptionClicked = (e: any) => () => {
        if (onChange) {
            onChange(e);
        }
        setIsOpenDropdown(false);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                <Placeholder>{placeholder}</Placeholder>
                <ArrowContainer value={isOpenDropdown}>
                    <ArrowR />
                </ArrowContainer>
            </DropDownHeader>
            <DropDownList value={isOpenDropdown}>
                {options.map((option) => (
                    <ListItem
                        width={width}
                        onClick={onOptionClicked(option.value)}
                        key={option.value}
                        options={options}
                    >
                        <Text value={value} options={options}>
                            {option.label}
                        </Text>
                    </ListItem>
                ))}
            </DropDownList>
        </DropDownContainer>
    );
};

export default Dropdown;
