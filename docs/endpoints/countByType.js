const countByType = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get count of all the hotels by their types", // operation's desc.
        operationId: "countByType", // unique operation id.
        parameters: [

        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "no of hotels by their types", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                properties: {
                                    type: {
                                        type: "string",
                                        description: "type of hotel",
                                        example: "hotel",
                                    },
                                    count: {
                                        type: "integer",
                                        description: "count",
                                        example: "7",
                                    }
                                }
                            }
                        },
                    },
                },
            },
        },
    },
}

export default countByType