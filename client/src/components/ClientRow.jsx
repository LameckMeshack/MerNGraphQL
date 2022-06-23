import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import { DELETE_CLIENT } from "./mutations/clientMutations";
import { Spinner } from "./Spinner";

export const ClientRow = ({ client }) => {
  const [deleteClient, { loading }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
    //   });
    // },
    //refetchQueries: [{ query: GET_CLIENTS }],
  });
  if (loading) return <Spinner />;
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
