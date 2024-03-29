import styled from 'styled-components';

export const ProductsContainer = styled.div`
    grid-area: Products;
`;
export const Content = styled.div`
    grid-area: Products;
    ${({ theme }) => theme.mixins.flexStart};
    flex-wrap: wrap;
    gap: 15px;
`;
export const ContentSkeleton = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    gap: 5px;
`;
export const ContainerSkeleton = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    flex-wrap: wrap;
    gap: 15px;
`;
