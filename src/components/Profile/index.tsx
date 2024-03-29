import React, { useState } from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import History from '@components/Profile/History';
import PersonalData from '@components/Profile/PersonalData';
import { useAppDispatch } from '@store';
import { setAuth } from '@store/user';
import { useNavigate } from 'react-router-dom';
import { generateRoute } from '@utils/helpers';
import { Content, Container, Tab, ButtonGroup, Line } from './style';

const types = [
    { id: 1, label: 'История заказов' },
    { id: 2, label: 'Личные данные' },
];

const Profile = () => {
    const navigate = useNavigate();
    const toggleRedirectHomePageAndExitProfile = () => {
        dispatch(setAuth(false));
        navigate(generateRoute(''));
    };
    const [active, setActive] = useState(types[0].id);
    const dispatch = useAppDispatch();
    return (
        <Container>
            <Breadcrumbs />
            <Content>
                <Line />
                <ButtonGroup>
                    {types.map((type) => (
                        <Tab key={type.id} active={active === type.id} onClick={() => setActive(type.id)}>
                            {type.label}
                        </Tab>
                    ))}
                    <Tab onClick={toggleRedirectHomePageAndExitProfile}>Выйти</Tab>
                </ButtonGroup>
                <Line />
                {active === 1 ? <History /> : <PersonalData />}
            </Content>
        </Container>
    );
};

export default Profile;
