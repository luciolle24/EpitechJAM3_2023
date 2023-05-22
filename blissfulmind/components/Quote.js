import { useEffect } from "react";

const Quote = () => {
    const api_url = "https://zenquotes.io/api/quotes/";

    async function getApi(url) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return <>${data}</>;
    }

    useEffect(() => {
        getApi(api_url);
    }, []);
};

export default Quote;
