import { useState } from "react";
import LoadingPage from "./pageLoading"
import WelcomePage from "./pageWelcom";
import Onboarding from "./onboarding";
import PageSignUp from "./pageSignUp";

const Shoea = () => {
  const [page, setPage] = useState(3);

  return (
    <>
      {page === 0 && <LoadingPage setPage={setPage} />}
      {page === 1 && <WelcomePage setPage={setPage} />}
      {page === 2 && <Onboarding />}
      {page === 3 && <PageSignUp />}
    </>
  );
};

export default Shoea;