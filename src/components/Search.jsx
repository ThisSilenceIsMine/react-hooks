import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [term, setTerm] = useState(" ");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timeoutID);
        };
    }, [term]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                `https://en.wikipedia.org/w/api.php`,
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                }
            );
            setResults(data.query.search);
        };
        fetchData();
    }, [debouncedTerm]);

    const renderedResults = results.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{item.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: item.snippet }}
                    ></span>
                    {/* {item.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;
