import axios from 'axios';

/* eslint-disable import/no-anonymous-default-export */
export default {
    getApi: (url) => {
        // let token = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            axios.get(`${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`,
                    "Ocp-Apim-Subscription-Key":'22ae1c5c4f1448d2b1fd14eb62981cc6'
                }
            }).then((result) => {
                resolve(result)
            }).catch(err => {
                resolve(err.message)
                console.log(err);
            })
        })
    },   
    
    postApi: (url, body) => {
        return new Promise((resolve, reject) => {
            axios.post(`${url}`, body, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`,
                    "Ocp-Apim-Subscription-Key":'22ae1c5c4f1448d2b1fd14eb62981cc6'
                }
            })
            .then((result) => {
                resolve(result)
            })
            .catch(err => {
                resolve(err.message)
                console.log(err);
            });
        })
    },
    
    deleteApi: (url) => {
        return new Promise((resolve, reject) => {
            axios.delete(`${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`,
                    "Ocp-Apim-Subscription-Key":'22ae1c5c4f1448d2b1fd14eb62981cc6'
                }
            }).then((result) => {
                resolve(result)
            }).catch(err => {
                resolve(err.message)
                console.log(err);
            })
        })
    },


};
