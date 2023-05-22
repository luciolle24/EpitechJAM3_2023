import fetch from "isomorphic-unfetch";

const handler = async (req, res) => {
    const api_url = "https://zenquotes.io/api/quotes/";

    async function getapi(url) {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        console.log(data);
    }

    getapi(api_url);
};

export default handler;
