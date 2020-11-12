import React from 'react';
import {Head} from './styles';

import logo from '../../assets/Logo.svg';
const Header: React.FC = () => (
    <Head>
        <div className="container">
            <img src={logo} alt="NewSpace"/>
            <ul>
                <li>Esportes</li>
                <li>Tecnologia</li>
                <li>Games</li>
            </ul>
        </div>
        <hr />
    </Head>
)

export default Header;