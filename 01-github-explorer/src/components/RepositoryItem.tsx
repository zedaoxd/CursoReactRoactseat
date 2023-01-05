import React from "react";

type Props = {
  id?: number;
  name: string;
  description: string;
  html_url: string;
};

const RepositoryItem = ({ name, description, html_url }: Props) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url}>Acessar Repositório</a>
    </li>
  );
};

export default RepositoryItem;
