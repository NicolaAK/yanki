import styled from 'styled-components';

interface IImageSize {
    heightImage?: number;
    widthImage?: number;
}

export const Container = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    @media ${({ theme }) => theme.breakpoints.md} {
        margin-bottom: 8px;
    }
`;

export const Content = styled.div``;

export const Photo = styled.button<IImageSize>`
    display: block;
    overflow: hidden;
    height: ${({ heightImage }) => heightImage}px;
`;

export const Image = styled.img<IImageSize>`
    width: ${({ widthImage }) => widthImage}px;
    transition: 0.7s;
    :hover {
        transform: scale(1.03);
    }
`;

export const Favourites = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background: #e0bea2;
    border-radius: 0px 0px 0px 20px;
    z-index: 2;
    @media ${({ theme }) => theme.breakpoints.md} {
        width: 30px;
        height: 30px;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 10px;
    @media ${({ theme }) => theme.breakpoints.md} {
        padding-top: 7px;
        gap: 2px;
    }
`;

export const NameProduct = styled.button`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    transition: ${({ theme }) => theme.decorations.transition};
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        ${({ theme }) => theme.helpers.getTypography('dText14')}
    }
`;

export const New = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    color: ${({ theme }) => theme.colors.elipsePastel()};
    position: absolute;
    right: 20%;
    @media ${({ theme }) => theme.breakpoints.md} {
        right: 5%;
        ${({ theme }) => theme.helpers.getTypography('dText14')}
    }
`;

export const Price = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')}
    @media ${({ theme }) => theme.breakpoints.md} {
        ${({ theme }) => theme.helpers.getTypography('dTextBold14')}
    }
`;

export const Sizes = styled.div`
    ${({ theme }) => theme.mixins.flexStartCenter};
    column-gap: 5px;
`;

export const Size = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    color: ${({ theme }) => theme.colors.blackPrimary(0.5)};
    @media ${({ theme }) => theme.breakpoints.md} {
        ${({ theme }) => theme.helpers.getTypography('dText14')}
    }
`;

export const Icon = styled.button`
    padding: 12.75px 12px 13.39px 13px;
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 6px 12px 13px 10px;
        scale: 0.8;
    }
`;