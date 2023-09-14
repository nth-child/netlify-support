exports.handler = async (event, context, callback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ data: 'hello'}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
    }
}