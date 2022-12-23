import React from 'react';
import {Slider} from "@mui/material";

const Index = () => {
    return (
        <>
            <h1>Home</h1>
            <div>
                <Slider defaultValue={30} />
                <Slider
                    defaultValue={30}
                    className="text-teal-600"
                    slotProps={{ thumb: { className: 'rounded-sm' } }}
                />
            </div>
        </>
    );
};

export default Index;
