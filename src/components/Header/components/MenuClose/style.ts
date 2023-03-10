import styled from 'styled-components';
import { Link } from 'react-router-dom';

type THeaderContainer = {
    $isDark?: boolean;
};
type TAnimation = {
    open: boolean;
};
export const MenuContainerClose = styled.div<TAnimation>`
    position: absolute;
    top: 32px;
    transition: all 0.4s ease-in-out;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-2%)')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    z-index: 2;
`;

export const Bar = styled.button``;
export const Text = styled(Link)<THeaderContainer>`
    ${({ theme }) => theme.helpers.getTypography('dHeader18')}
    color: ${({ theme, $isDark }) => ($isDark ? theme.colors.blackPrimary() : theme.colors.white())};
    z-index: 2;
    transition: ${({ theme }) => theme.decorations.transition};
    text-decoration-line: none;
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const MenuTitle = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 25px;
    z-index: 2;
`;
