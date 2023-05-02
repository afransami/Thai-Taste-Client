import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Termns And Conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem corporis quod, laborum atque nemo. Architecto vel sequi blanditiis totam cumque obcaecati voluptate et inventore, fuga unde molestias eos asperiores!</p>
            <p>Go back to <Link to= '/register'>Register</Link></p>
        </div>
    );
};

export default Terms;