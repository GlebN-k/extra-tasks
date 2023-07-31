import React from 'react';
import { useNavigate } from 'react-router';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props

    const navigate = useNavigate()

    const mainPageHandler = () => {
        navigate("/page/0")
    }

    const comeBackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={comeBackHandler}>Назад</button>
            <button onClick={mainPageHandler}>Главная страница</button>
        </div>
    );
};

