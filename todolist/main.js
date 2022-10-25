'use strict';

{

    // const newItem = document.createElement('li');

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        // console.log('submit');
        const newItem = document.createElement('li');
        const text = document.querySelector('input');
        newItem.textContent = text.value;

        const ul = document.querySelector('ul');
        ul.appendChild(newItem);

        text.value= '';
        text.focus();

        newItem.addEventListener(('click'), e => {
            e.currentTarget.classList.toggle('done');
        });
    });



}