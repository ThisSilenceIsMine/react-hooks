import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is react",
        content: "React is a front-end JS framework",
    },

    {
        title: "Why react?",
        content: "React is a favorite JS lib among may ingeneers",
    },

    {
        title: "How do you use react?",
        content: "By creating components!",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "Shade of Blue",
        value: "blue",
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Translate />
            {/* <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            /> */}
            {/* <Search /> */}
            {/* <Accordion items={items} /> */}
        </div>
    );
};
