import React, { FC, ReactNode } from 'react';
import { ButtonContainer, ButtonText, ButtonTextIcon, Icon } from '@components/Button/styled';
import FavouritesButton from '@assets/icons/favouritesButton.svg';
import Spinner from '@components/Button/Loader';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'primary' | 'favourites';
    width?: number;
    icon?: ReactNode;
    isLoading?: boolean;
};
export const Button: FC<ButtonProps> = ({
    onClick,
    color = 'primary',
    children,
    width,
    icon = <FavouritesButton />,
    isLoading,
}) => {
    const renderContent = () => {
        if (isLoading) {
            return <Spinner />;
        }

        if (color === 'favourites') {
            return (
                <ButtonTextIcon>
                    <Icon>{icon}</Icon>
                    {children}
                </ButtonTextIcon>
            );
        }

        return <ButtonText>{children}</ButtonText>;
    };

    return (
        <ButtonContainer onClick={onClick} color={color} width={width}>
            {renderContent()}
        </ButtonContainer>
    );
};