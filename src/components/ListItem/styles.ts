import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    position: relative;
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input[type=checkbox] {
        width: 20px;
        height: 25px;
        margin-right: 15px;
    }

    input[type=text] {
        width: 80%;
        background: transparent;
        color: #FFF;
        outline: none;
        border: 0;
        font-size: 16px;
        border-bottom: 1px solid #80808073;
        padding: 5px 10px;
    }

    label {
        color: #CCC;
        padding: 5px 10px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .container-icons {
        position: absolute;
        right: 20px;
        display: flex;
        gap: 1rem;
        align-items: center
    }

    .container-icons i {
        font-size: 23px;
        cursor: pointer;
        transition: all ease 0.3s;
    }

    .container-icons i:hover {
        color: #FFF;
    }

    .container-Edit {
        position: absolute;
        right: 20px;
        display: flex;
        gap: 0.5rem;
        align-items: center
    }

    .container-Edit i {
        font-size: 29px;
        cursor: pointer;
        transition: all ease 0.3s;
    }

    .container-Edit i:nth-child(1) {
        color: #1bb876;
    }

    .container-Edit i:nth-child(1):hover {
        color: #1df298;
    }

    .container-Edit i:nth-child(2) {
        color: #aa2020;
    }

    .container-Edit i:nth-child(2):hover {
        color: #fb2c2c;
    }

    .on {
        display: flex;
    }

    .off {
        display: none;
    }
`
));