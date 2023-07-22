import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const useData = useSelector((state) => state.user);
  const { users, error, loading } = useData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>loading ...</p>;
    if (!loading && error) return <p>{error}</p>;
    if (!loading && !error && useData && users.length)
      return (
        <div>
          <h2>user list</h2>
          {users.map((user) => (
            <p>{user.name}</p>
          ))}
        </div>
      );
  };

  return <div>{renderUsers()}</div>;
};

export default UserContainer;

// {loading ? (
//     <p>loading ... </p>
//   ) : error ? (
//     <p>{error}</p>
//   ) : (
//     useData &&
//     users &&
//     users.length && (
//       <div>
//         <h2>use list</h2>
//         {users.map((user) => (
//           <p>{user.name}</p>
//         ))}
//       </div>
//     )
//   )}
