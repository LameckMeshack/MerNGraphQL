import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/ProjectQueries";
import { Spinner } from "../components/Spinner";
import { ClientInfo } from "../components/ClientInfo";
import { DeleteProjectBtn } from "../components/DeleteProjectBtn";
import { EditProjectForm } from "../components/EditProjectForm";

export const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner />;
  if (error) return <p>Something Went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className=" btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5>Project Status</h5>
          <p>{data.project.status}</p>

          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectBtn projectId={data.project.id} />
        </div>
      )}
    </>
  );
};
