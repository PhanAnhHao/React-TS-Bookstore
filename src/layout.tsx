import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import { useEffect } from "react"
import { fetchAccountApi } from "services/api"
import { useCurrentApp } from "./components/context/app.context"
import { PacmanLoader } from "react-spinners"

function Layout() {

  const { setUser, isAppLoading, setIsAppLoading, setIsAuthenticated } = useCurrentApp();

  const fetchAccount = async () => {
    const res = await fetchAccountApi();
    console.log({ res });
    if (res.data) {
      setUser(res.data.user);
      setIsAuthenticated(true);
    }
    setIsAppLoading(false);
  }

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <>
      {isAppLoading === false
        ?
        <div>
          <AppHeader />
          <Outlet />
        </div>
        :
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <PacmanLoader
            size={30}
            color="#36d6d4"
          />
        </div>
      }
    </>
  )
}

export default Layout
