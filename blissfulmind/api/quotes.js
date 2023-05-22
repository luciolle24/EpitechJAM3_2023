import fetch from "isomorphic-unfetch";

const handler = async (req, res) => {
    const url =
        "https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&size=medium&maxR=1&t=Wisdom";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
            "X-RapidAPI-Host": "healthruwords.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default handler;
