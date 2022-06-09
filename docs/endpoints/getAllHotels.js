const getAll = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get details of all hotels", // operation's desc.
        operationId: "gethotels", // unique operation id.
        parameters: [
            // expected params.
            {
                name: "feature", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "boolean",
                    description: "true or false",
                    example: ''
                },
                required: false, // Mandatory param
                description: "Fetch featured hotels", // param desc.
            },
            {
                name: "limit", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "integer",
                    description: "limit",
                    example: ''
                },
                required: false, // Mandatory param
                description: "no of hotels to be displayed", // param desc.
            },
            {
                name: "city", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "string",
                    description: "destination",
                    example: ''
                },
                required: false, // Mandatory param
                description: "list of hotels available in the destination", // param desc.
            },
            {
                name: "min", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "integer",
                    description: "price",
                    example: ''
                },
                required: false, // Mandatory param
                description: "minimum price", // param desc.
            },
            {
                name: "max", // name of the param
                in: "query", // location of the param
                schema: {
                    type: "integer",
                    description: "price",
                    example: ''
                },
                required: false, // Mandatory param
                description: "maximum price", // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "List of all hotels", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                properties: {
                                    _id: {
                                        type: "string",
                                        description: "id of an hotel",
                                        example: "6294f3a52269a0d6132dd7f3",
                                    },
                                    name: {
                                        type: "string",
                                        description: "name of an hotel",
                                        example: "Hotel Sharma",
                                    },
                                    type: {
                                        type: "string",
                                        description: "type of hotel",
                                        example: "hotel",
                                    },
                                    city: {
                                        type: "string",
                                        description: "city",
                                        example: "guwahati",
                                    },
                                    address: {
                                        type: "string",
                                        description: "address",
                                        example: "somewhere",
                                    },
                                    distance: {
                                        type: "string",
                                        description: "distance",
                                        example: "500",
                                    },
                                    photos: {
                                        type: "array",
                                        description: "id of an hotel",
                                        example: [],
                                    },
                                    title: {
                                        type: "string",
                                        description: "title",
                                        example: "best hotel in the city",
                                    },
                                    desc: {
                                        type: "string",
                                        description: "description",
                                        example: "hotel desc",
                                    },
                                    rooms: {
                                        type: "array",
                                        description: "photos",
                                        example: ["6296099db50dffa4f89f9597"],
                                    },
                                    cheapestPrice: {
                                        type: "integer",
                                        description: "cheapest price",
                                        example: 100,
                                    },
                                    featured: {
                                        type: "boolean",
                                        description: "featured hotel?",
                                        example: true,
                                    },
                                    __v: {
                                        type: "integer",
                                        description: "version",
                                        example: 0,
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

export default getAll