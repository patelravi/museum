export function getBaseUrl() {
    let baseUrl = "https://museum-backend.herokuapp.com/";

    // production
    if (process.env.NODE_ENV == 'production') {
        baseUrl = "https://museum-backend.herokuapp.com/";
        return baseUrl;
    }

    return baseUrl;
}