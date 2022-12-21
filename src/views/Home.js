import React from 'react';
import {TextField} from "@mui/material";

const Home = () => {
    return (
        <>
            <h1 className="text-3xl text-red-500 font-bold underline">
                Home
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </h1>
        </>
    );
};

export default Home;
