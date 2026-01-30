"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const PageForCountry = () => {
    const [country, setCountry] = useState(""); // State to store the user's country
    const [error, setError] = useState(null);  // State to handle errors

    const getLocation = async () => {
        try {
            const response = await axios.get("http://ip-api.com/json");
            setCountry(response.data.country); // Extract and set the country
        } catch (error) {
            setError("Unable to fetch location."); // Handle errors
            console.error("Error fetching location:", error);
        }
    };

    useEffect(() => {
        getLocation(); // Fetch location when the component mounts
    }, []);

    // Store location in a variable
    const locationContent = (() => {
        switch (country) {
            case "United Kingdom":
                return "Welcome to the UK!";
            case "Ireland":
                return "Hello from Ireland!";
            case "Canada":
                return "Greetings from Canada!";
            case "Australia":
                return "G'day from Australia!";
            case "Germany":
                return "Willkommen aus Deutschland!";
            case "New Zealand":
                return "Kia ora from New Zealand!";
            case "United Arab Emirates":
                return "Welcome from Dubai!";
            default:
                return country ? `Hello from ${country}!` : "Fetching your location...";
        }
    })();

    return (
        <div>
            <h2>{error ? error : locationContent}</h2>
        </div>
    );
};

export default PageForCountry;
