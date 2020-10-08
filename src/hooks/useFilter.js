import {useEffect,useState} from 'react';


 const useFilter= (users)=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(users);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
          const results = users.filter(user =>
              user.name.first.toLowerCase().includes(searchTerm) ||
              user.name.last.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
        }, 250);
        return () => clearTimeout(timer);
    
  }, [searchTerm]);

  return {searchResults,handleSearch,searchTerm}

}

export default useFilter;