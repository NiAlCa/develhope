
import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState(null)

  function fetchGitHubUser(username) {
    setLoading(true)
    setError(null)
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setData(response.data))
      .catch((e) => setError(e), setData(null))
      .finally(setLoading(false));
  }
  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return {data , loading, error};
}