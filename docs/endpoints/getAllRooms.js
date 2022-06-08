const getAllRooms = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get details of all available rooms", // operation's desc.
        operationId: "getAllRoom", // unique operation id.
        parameters: [
            // expected params.
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "List of all rooms", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                properties: {
                                    _id: {
                                        type: "string",
                                        description: "id of the hotel",
                                        example: "6294f3a52269a0d6132dd7f3",
                                    },
                                    title: {
                                        type: "string",
                                        description: "title of the hotel",
                                        example: "King room",
                                    },
                                    price: {
                                        type: "integer",
                                        description: "price of booking",
                                        example: "100",
                                    },
                                    maxPeople: {
                                        type: "integer",
                                        description: "max no of accommodation",
                                        example: "2",
                                    },
                                    desc: {
                                        type: "string",
                                        description: "description",
                                        example: "King size bed, 1 bathroom, balcony",
                                    },
                                    roomNumbers: {
                                        type: "array",
                                        description: "list of rooms",
                                        items: {
                                            properties: {
                                                number: {
                                                    type: "integer",
                                                    description: "room number",
                                                    example: "101",
                                                },
                                                unavailableDates: {
                                                    type: "array",
                                                    description: "unavailable dates",
                                                },
                                                __id: {
                                                    type: "integer",
                                                    description: "id of the room",
                                                    example: "6296099db50dffa4f89f9598",
                                                },
                                            }
                                        }
                                    },
                                    createdAt: {
                                        type: "string",
                                        description: "description",
                                        example: "022-05-31T12:27:09.913Z",
                                    },
                                    updatedAt: {
                                        type: "string",
                                        description: "description",
                                        example: " 2022-05-31T12:27:09.913Z",
                                    },
                                    __v: {
                                        type: "integer",
                                        example: "0",
                                    },

                                }
                            }
                        },
                    },
                },
            },
        },
    },
}

export default getAllRooms