import { useEffect, useState } from "react";

export function GithubUser({ user }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const json = await response.json();

        setUserData(json);
      } catch (error) {
        console.error(error);
        setUserData(null);
      }
    };
    fetchGithubUser();
  }, [user]);

  return (
    <div>
     

          <div>
            <p>Nombre: {userData.name}</p>
            <p>Usuario: {userData.login}</p>
            <img src={userData.avatar_url} alt="Avatar" />
          </div>
       
     
    </div>
  );
}
