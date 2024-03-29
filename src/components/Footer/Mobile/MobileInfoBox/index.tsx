import React, { FC, useState } from 'react';
import {
    ArrowContainer,
    BoxInfo,
    Line,
    OpenDescription,
    Box,
    Title,
    VisiblePart,
    Text,
    Icons,
    Icon,
} from '@components/Footer/Mobile/style';
import ArrowR from '@assets/icons/arrowR.svg';

interface IProps {
    title: string;
    abouts: string[];
    icons?: React.ReactNode[];
}
const InfoBox: FC<IProps> = ({ icons, title, abouts }) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
    return (
        <BoxInfo onClick={toggleOpenDetails}>
            <VisiblePart>
                <Box>a</Box>
                <Title isOpenDetails={isOpenDetails}>{title}</Title>
                <ArrowContainer isOpenDetails={isOpenDetails}>
                    <ArrowR />
                </ArrowContainer>
            </VisiblePart>
            <OpenDescription isOpenDetails={isOpenDetails}>
                {abouts.map((text) => (
                    <Text key={text}>{text}</Text>
                ))}
                <Icons>
                    {icons?.map((icon) => (
                        <Icon key={Math.random()}>{icon}</Icon>
                    ))}
                </Icons>
            </OpenDescription>
            <Line />
        </BoxInfo>
    );
};

export default InfoBox;
