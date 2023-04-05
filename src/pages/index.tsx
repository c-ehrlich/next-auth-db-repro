import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={session ? () => void signOut() : () => void signIn()}>
        {session ? "Sign out" : "Sign in"}
      </button>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default Home;
