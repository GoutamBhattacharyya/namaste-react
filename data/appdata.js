import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_PUBLISHABLE_KEY);

const AppData = () => {
    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        const getInstruments = async () => {
            const { data } = await supabase.from("products").select();
            setInstruments(data || []);
        };
        getInstruments();
    }, []);
    return (instruments);
}

export default AppData