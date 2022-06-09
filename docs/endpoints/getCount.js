const getCount = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get count of all the hotels in the city", // operation's desc.
        operationId: "getCount", // unique operation id.
        parameters: [
            // expected params.
            {
                name: "cities", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "string",
                    description: "name of the cities",
                    example: 'berlin'
                },
                required: true, // Mandatory param
                description: "name of the city", // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "no of hotels", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                type: "integer",
                                description: "number of hotels",
                                example: "5",
                            },
                        },
                    },
                },
            },
        },
    },
}

export default getCount