## Allergy Scanner README.md

### Introduksjon

Allergy Scanner er en app som hjelper brukere med å finne allergene i produkter

### Hvordan appen fungerer

1. **Produktidentifikasjon:** Brukeren skanner et produkt med appens barcodescanner.
2. **Allergen Informasjon:** Appen henter allergen informasjon for produktet fra Kassalapp.
4. **Presentasjon av resultater:** Appen viser en rød popup med liste over allergener hvis de er til stede eller en grønn popup hvis de ikke er det
   
### Fordeler

* **Enkel å bruke:** Bruk barcodescanneren for å identifisere allergener i produktet raskt og enkelt.

### Begrensninger

* **Appen er for øyeblikket ikke publisert på App Store eller Google Play.**
* **Det er ikke alle allergener som er registrert bare de lovpålagte.**
* **Appen krever en internettforbindelse for å fungere.**
* **Appen krever en maskin med React Native expo og en telefon med expo go for å fungere.**

### Hvordan få en API-nøkkel

1. Gå til [https://kassal.app/api](https://kassal.app/api).
2. Klikk på "Opprett API Nøkkel".
3. Fyll ut informasjonen din og velg "Gratis tier".
4. Kopier API-nøkkelen din og opprett så en .env fil og legg til EXPO_PUBLIC_KASSAL_KEY=<din kassal API-nøkkel her>.


**Takk for din interesse for Allergy Scanner!**
