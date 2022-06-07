const findHotel = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Find an hotel by id", // operation's desc.
        operationId: "findhotel", // unique operation id.
        parameters: [
            // expected params.
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    type: "string",
                    description: "id of the hotel",
                    example: '62963049b50dffa4f89f95af'
                },
                required: true, // Mandatory param
                description: "id of the hotel", // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "details of the hotel", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "object",
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
                        },
                    },
                },
            },
        },
    },

}

export default findHotel