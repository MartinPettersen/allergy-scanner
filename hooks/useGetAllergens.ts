import { useState, useEffect } from "react";

export const useGetAllergens = (ean: string) => {
  const [allergens, setAllergens] = useState(null);

  useEffect(() => {
    const fetchAllergens = async () => {
        console.log(`process.env.KASSAL_KEY: ${process.env.EXPO_PUBLIC_KASSAL_KEY}`)
      try {
        const url = `https://kassal.app/api/v1/products/ean/${ean}`;
        const options = {
          headers: {
            "Authorization": `Bearer ${process.env.EXPO_PUBLIC_KASSAL_KEY}`,
          },
        };

        const res = await fetch(url, options);
        const data = await res.json();

        console.log("fetching");
        console.log(data.data.allergens);

        setAllergens(data.data.allergens);
      } catch (error) {
        console.log(error);
      }
    };

    if (ean) {
      fetchAllergens();
    }
  }, [ean]);

  return allergens;
};
