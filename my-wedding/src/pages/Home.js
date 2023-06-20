import React from 'react';
import Nav from '../layout/Nav';
import Timer from '../components/Timer';
import Ceremonie from '../components/Ceremonie';
import Form from '../components/Form';

const Home = () => {
    return (
        <div>
           
            <Nav/>
            <h2>Deux oui pour un nom !</h2>
            <Timer/>
            <p> Bienvenue sur le site de notre mariage, vous pourrez y voir toutes les informations relatives au Jour J, confirmez votre présence, nous laisser un petit mot et simplement nous contacter!
            </p>
            <Ceremonie type={'Mairie'} lieu={'Mairie de Levallois'} />
            <Ceremonie type={'Synagogue'} lieu={'Les Tournelles'} />
            <Ceremonie type={'Soirée'} lieu={'Salon Berlioz Grand Hotel Opéra'} />
            
        </div>
    );
};

export default Home;