import servers from "./servers.js";
import tags from "./tags.js";
import getAll from "./endpoints/getAllHotels.js";

const docs = {
    openapi: "3.0.3", // present supported openapi version
    info: {
        title: "Booking App API", // short title.
        description: "APIs for booking and managing hotels, used in MERN application", //  desc.
        version: "1.0.0", // version number
        contact: {
            name: "Simran Shah", // your name
            email: "simran_ug@ece.nits.ac.in", // your email
            url: "https://github.com/simran2401", // your website
        },

    },
    ...servers,
    ...tags,
    paths: {
        '/hotels': {
            ...getAll,
        },
    }
};

export default docs