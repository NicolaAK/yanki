import styled from 'styled-components';
interface IProps {
    open: boolean;
    isDark?: boolean;
}
export const StyledBurger = styled.button<IProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;

    &:focus {
        outline: none;
    }
`;
export const Line = styled.div<IProps>`
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, isDark }) => (isDark ? theme.colors.mainPrimary() : theme.colors.white())};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
        width: 1.5rem;
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
        width: ${({ open }) => (open ? '2rem' : '1rem')};
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
`;
