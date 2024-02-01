import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { AUTH_CHECK, AUTH_ERROR } from "@/store/RootReducer";
// import { RootState } from "./store/type/RootState";
// import { API, SetAuthToken } from "./config/api";
import { FormLoginHook } from "./features/auth/hooks/FormLoginHook";


import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ThreadDetailFeature from "./pages/ThreadDetail/ThreadDetail";
// import ThreadDetailFeature from "./pages/ThreadDetail/ThreadDetail";
import Login from "./pages/Login/Login";
import Main from "./layout/Main";
import SearchUser from "./pages/SearchUser/SearchUser";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "darkBackground",
      },
    },
  },
  colors: {
    darkBackground: "#222",
  },
});

function App() {
  const { saveDataUser } = FormLoginHook();



  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      saveDataUser()
    }

  }, [])
  // const auth = useSelector((state: RootState) => state.auth);
  // console.log(auth);

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // // function authCheck
  // async function authCheck() {
  //   try {
  //     SetAuthToken(localStorage.token);
  //     const response = await API.get("/user/check");
  //     console.log("check auth app", response);

  //     dispatch(AUTH_CHECK(response.data.user));
  //     setIsLoading(false);
  //   } catch (err) {
  //     dispatch(AUTH_ERROR());
  //     console.log("auth check error", err);
  //     setIsLoading(false);
  //     navigate("/login");
  //   }
  // }

  // useEffect(() => {
  //   if (localStorage.token) {
  //     authCheck();
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  // Private Root
  function IsNotLogin() {
    if (!localStorage.token) {
      return <Navigate to="/login" />;
    } else {
      return <Main />;
    }
  }

  function IsLogin() {
    if (localStorage.token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      {/* {isLoading ? null : (
        */}

      {/* <Route element={<IsNotLogin />}>
              <Route path="/" element={<Home />} />
              <Route path="/thread/:id" element={<ThreadDetail />} /> */}
      {/* </Route> */}


      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={< IsNotLogin />} >
            <Route path="/" element={<Home />} />
            <Route path="/thread/:id" element={<ThreadDetailFeature />} />
            <Route path="/search" element={<SearchUser />} />
          </Route>

          <Route path="/" element={<IsLogin />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* <Route path="/" element={<Home />} /> */}

        </Routes>
      </ChakraProvider>

    </>
  );
}
export default App;
