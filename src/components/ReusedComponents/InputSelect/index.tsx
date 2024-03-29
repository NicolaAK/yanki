import React, { useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { ErrorText } from '@components/ReusedComponents/Input/style';
import { Container, ListContainer, List, ListItem, Header, ArrowContainer } from './style';
import useClickOutside from '../../../HOK/ClickOutside';

export interface IProps {
    options: string[];
    onChange?: (value: string) => void;
    placeholder?: string;
    errorText?: string;
    width: number;
    value?: string;
}

const Select = ({ options, onChange, placeholder, errorText, width, value }: IProps) => {
    const [isOpenSelect, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpenSelect);
    const close = () => setIsOpen(false);
    const wrapperRef = useClickOutside(close);
    const handleChangeSize = (size: string) => {
        if (onChange) {
            onChange(size);
            setIsOpen(false);
        }
    };

    return (
        <Container ref={wrapperRef}>
            <Header onClick={toggling}>
                {value || placeholder}
                <ArrowContainer isOpenSelect={isOpenSelect}>
                    <ArrowR />
                </ArrowContainer>
            </Header>
            {isOpenSelect && (
                <ListContainer width={width}>
                    <List>
                        {options.map((option) => (
                            <ListItem onClick={() => handleChangeSize(option)} key={option}>
                                {option}
                            </ListItem>
                        ))}
                    </List>
                </ListContainer>
            )}
            {errorText && <ErrorText>{errorText}</ErrorText>}
        </Container>
    );
};
export default Select;
