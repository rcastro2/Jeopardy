import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {catIDs} from './CategoryIds'

const selected = []
while(selected.length < 5){
    let r = Math.floor(Math.random()*catIDs.length)
    if(!selected.includes(r)){
        selected.push(r);
    }
}

//Callback Hell!
let catData = []
const request = require('request');
request("http://jservice.io/api/clues?category=" + catIDs[selected[0]].id, function(err, res, body) {
    if (err)
        throw err;    
    const jsondata = JSON.parse(body)
    catData.push({
        title:catIDs[selected[0]].title,
        questions:jsondata
    })
    //Ugly1
    request("http://jservice.io/api/clues?category=" + catIDs[selected[1]].id, function(err, res, body) {
        if (err)
            throw err;    
        const jsondata = JSON.parse(body)
        catData.push({
            title:catIDs[selected[1]].title,
            questions:jsondata
        })
        //Ugly2
        request("http://jservice.io/api/clues?category=" + catIDs[selected[2]].id, function(err, res, body) {
            if (err)
                throw err;    
            const jsondata = JSON.parse(body)
            catData.push({
                title:catIDs[selected[2]].title,
                questions:jsondata
            })
            //Ugly3
            request("http://jservice.io/api/clues?category=" + catIDs[selected[3]].id, function(err, res, body) {
                if (err)
                    throw err;    
                const jsondata = JSON.parse(body)
                catData.push({
                    title:catIDs[selected[3]].title,
                    questions:jsondata
                })
                //Ugly4
                request("http://jservice.io/api/clues?category=" + catIDs[selected[4]].id, function(err, res, body) {
                    if (err)
                        throw err;    
                    const jsondata = JSON.parse(body)
                    catData.push({
                        title:catIDs[selected[4]].title,
                        questions:jsondata
                    })
                    console.log(catData);
                    ReactDOM.render(<App info={catData}/>, document.getElementById('root'));  
                })  
            })  
        })      
    })
})

/*
//Test Data - In case of no Internet
catData = [{
    title:"Test",
    questions:[
        {
            value:200,
            question:"Try",
            answer:"Again"
        },
        {
            value:400,
            question:"Not Again",
            answer:"Ok"
        },
        {
            value:600,
            question:"Should it work?",
            answer:"Yes."
        },
        {
            value:800,
            question:"Did it work?",
            answer:"No"
        },
        {
            value:1000,
            question:"I don't know",
            answer:"Sleep"
        },
    ]
}]
ReactDOM.render(<App info={catData}/>, document.getElementById('root'));
console.log(catData);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
