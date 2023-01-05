import RepositoryItem from "./RepositoryItem";
import { useEffect, useState } from "react";

import "../styles/repositorioes.scss";

type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((x) => (
          <RepositoryItem
            key={x.id}
            description={x.description}
            html_url={x.html_url}
            name={x.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
