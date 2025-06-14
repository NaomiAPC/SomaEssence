import { useEffect, useState } from "react";

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
    const [result, setResult] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(url!);
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }

                const json = await res.json();
                setResult(json);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchCategories();
        } else {
            setError("Backend URL not defined");
            setLoading(false);
        }
    }, [url]);

    return { result, loading, error };
}
