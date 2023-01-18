import styled from 'styled-components';
import Typography from '@components/Typography';

export const LanguageContainer = styled.div`
    flex-direction: row;
`;
export const LanguageContent = styled.button`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 9px;
`;

export const LanguageTitle = styled(Typography).attrs({ variant: 'dHeader18' })``;
