import { useUser } from "../userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </div>
  );
};
