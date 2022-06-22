import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { ClientRow } from "./ClientRow";
import { Spinner } from "./Spinner";

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}{" "}
    </>
  );
};
