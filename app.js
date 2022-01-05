module.exports.handler = async function (event, context) {
    try {
        console.log(JSON.stringify(event));
        const request = JSON.parse(JSON.stringify(event.Records[0].cf.request));
        if (request.headers.authorization) {
            return Promise.resolve(request);
        }
        else {
            request.uri = '/error.html'
            return Promise.resolve(request)
        }
    } catch (e) {
        console.log(JSON.stringify(e))
    }
}