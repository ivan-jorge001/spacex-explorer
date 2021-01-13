import baseRequest from '../baseRequest';

/**
 * @name spaceXBaseRequest
 * this function is here as a middleware so anytime a call is made to the SPACEX 
 * api we make sure the url is passed in the env and if not throw an error.
 * also for example if this is an api that needs to be authorized before the any call is made 
 * i would put the logic of authorization in here so I re use that code across all endpoint this app is accessing
 */

const spaceXBaseRequest = async (path, options) => {
    /**
     * here I would have something like this 
     * const SPACEX_API = process.env.SPACEX_API
     * basically asinging the envroment variable to a local variable 
     * to add enviroment variables I would have to install more packages like (react-native-dotenv, react-native-config, ...)
     * which in the instructions say to no use any extra packages for that reason I am hard coding the url
     */
    const SPACEX_API =  'https://api.spacexdata.com/v3'
    
    // this check is always going to be FALSE in this project
    // but i just put here to show the structure I use on my production code to check

    if (!SPACEX_API) {
        // here I use log because console.error will crash the app.
        console.log("SPACEX_API is missing from env variables")
    }
    
    try {
        const res = await baseRequest(`${SPACEX_API}${path}`, options);
        const dataInString = await res.text();
        const responseInJson = JSON.parse(dataInString);

        return responseInJson;
    } catch (error) {
        throw error;
    }
}

export default spaceXBaseRequest;