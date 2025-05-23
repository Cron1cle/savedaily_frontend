export const fetchFriends = async () => {
    try {
      const response = await fetch('http://192.168.2.70:8080/api/friends');
      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }
      const data = await response.json(); // Antwort in JSON umwandeln
      return data; // Daten zurückgeben
    } catch (err) {
      throw new Error(`Fehler beim Abrufen der Freunde: ${err.message}`);
    }
  };

  export const approveLogin = async (email, password) => {
    try {
      const response = await fetch('http://192.168.2.54:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        console.log("Success")
        return 200; // Erfolgreich
      } else {
        console.log("Failure")
        return 400; // Fehler
      }
    } catch (err) {
      throw new Error(`Fehler beim Login: ${err.message}`);
    }
  };

  export const registerUser = async (username, firstName, lastName, gender, birthday, email, password) => {
    try {
      const response = await fetch('http://192.168.2.54:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, firstName, lastName, gender, birthday, email, password }),
      });
      if (response.status === 201) {
        console.log("Registration Success");
        return 201; // Erfolgreich
      } else {
        console.log("Registration Failure");
        return 400; // Fehler
      }
    } catch (err) {
      throw new Error(`Fehler beim Registrieren: ${err.message}`);
    }
  };

  export const fetchAttractions = async () => {
    try {
        const response = await fetch('http://192.168.2.54:8080/attractions');
        const data = await response.json(); // Antwort in JSON umwandeln

        if (!response.ok) {
            throw new Error(`HTTP-Error: ${response.status}`);
        }
        return data; // Daten zurückgeben
    } catch (err) {
        throw new Error(`Fehler beim Abrufen der Attraktionen: ${err.message}`);
    }
};


export const fetchProducts = async () => {
  try {
    const response = await fetch('http://192.168.2.54:8080/products'); 
    if (!response.ok) {
      throw new Error(`HTTP-Error: ${response.status}`);
    }
    const data = await response.json(); // Antwort in JSON umwandeln
    return data; // Daten zurückgeben
  } catch (err) {
    throw new Error(`Fehler beim Abrufen der Produkte: ${err.message}`);
  }
};

  

  
    


