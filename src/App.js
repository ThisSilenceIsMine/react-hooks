import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
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

const showAccordion = () => {
    if (window.location.pathname === "/") {
        return <Accordion items={items} />;
    }
};
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            </Route>
            {/* <Accordion items={items} /> */}
        </div>
    );
};
