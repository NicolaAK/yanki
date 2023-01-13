import React from 'react';
import SpecialCard from '@components/Main/SpecialCards/SpecialCard/SpecialCard';
import Card1 from '@assets/images/Card1.png';
import Card2 from '@assets/images/Card2.png';
import { Card, SpecialCardsContainer, SpecialCardsTitle, SpecialCardsContant } from './styles';

const cardInfo = [
    {
        headTitle: 'Оформите карту «Северяночка»',
        depictTitle: 'И получайте бонусы при покупке в магазинах и на сайте',
        cardIcon: <img src={Card1} alt="promoImage" />,
        background: '#FCD5BA',
    },
    {
        headTitle: 'Покупайте акционные товары',
        depictTitle: 'И получайте вдвое больше бонусов ',
        cardIcon: <img src={Card2} alt="promoImage" />,
        background: '#E5FFDE',
    },
];
const SpecialCards = () => (
    <SpecialCardsContainer>
        <SpecialCardsContant>
            <SpecialCardsTitle>Специальные предложения</SpecialCardsTitle>
            <Card>
                {cardInfo.map((card) => (
                    <SpecialCard
                        key={card.headTitle}
                        headTitle={card.headTitle}
                        depictTitle={card.depictTitle}
                        cardIcon={card.cardIcon}
                        background={card.background}
                    />
                ))}
            </Card>
        </SpecialCardsContant>
    </SpecialCardsContainer>
);
export default SpecialCards;