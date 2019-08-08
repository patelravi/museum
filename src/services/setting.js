export function getBaseUrl() {
    let baseUrl = "http://470c468e.ngrok.io/";

    // production
    if (process.env.NODE_ENV == 'production') {
        baseUrl = "https://museum-backend.herokuapp.com/";
        return baseUrl;
    }
    // baseUrl = "https://museum-backend.herokuapp.com/";
    return baseUrl;
}