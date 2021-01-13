/**
 * @name baseRequest
 * this is my wrapper for all the API call made from my app. 
 * 1. Re using error logs.
 * 2. the same way to log all api calls. 
 * 3. analytics across all api we calls. 
 */
const baseRequest = async (url, options) => {
    try {
        const response = await fetch(url, options)

        if (+response.status >= 400) {
            const errorMessage = JSON.stringify({ 
                statusCode: response.status, 
                message: response.statusText,
                method: options.method, 
                url, 
            })

            throw new Error(errorMessage)
        }

        return response
    } catch (error) {
        // here I would NOT use a console.log() I would create a custom logger like (Firebase, ...)
        console.log('error', error)
        throw error;
    }
}

export default baseRequest;