require('dotenv').config();
const https = require('https')

module.exports = class GoogleMapsService {
    APIKey = process.env.GoogleMapsAPIKey

    async GetPlaceData(placeId) {
        return new Promise((resolve, reject) =>{
            https.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + "&key=" + this.APIKey, 
            res => {
                var chunk='';
                res.on('data', d => {
                    chunk+=d
                })
    
                res.on('end', () => {
                    resolve(JSON.parse(chunk));
                })
                res.on('error', (er) => {
                    reject(er.message)
                })
            })
        }) 
    }
}