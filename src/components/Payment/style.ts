import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div`
    padding-top: 30px;
`;
export const HeaderText = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')}
    padding-bottom: 20px;
`;
export const BodyText = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '. .';
`;
export const Conditions = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
`;
export const Subtitle = styled.div`
    padding-bottom: 10px;
`;
export const Title = styled.div`
    justify-content: center;
    padding-bottom: 5px;
`;
export const StepBuy = styled.div`
    padding-top: 20px;
`;
export const BodyStep = styled.div`
    display: grid;
    grid-template-columns: 19em 16em 34em;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. . .';
    margin: 25px 0 auto 0;
`;
export const Step = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
`;
export const Icon = styled.div`
    padding-right: 15px;
`;
