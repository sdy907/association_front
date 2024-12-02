import {createBrowserRouter, Navigate} from "react-router-dom";
import {lazy, Suspense} from "react";


const LoadingPage = lazy(() => import("../pages/LoadingPage.tsx"))
const RegisterPage = lazy(() => import("../pages/RegisterPage.tsx"))
const ApplierIndex = lazy(() => import("../pages/applier/ApplierIndex.tsx"))
const ApplierListPage = lazy(() => import("../pages/applier/ApplierListPage.tsx"))
const ApplierReadPage = lazy(() => import("../pages/applier/ApplierReadPage.tsx"))


export const Loading = <LoadingPage></LoadingPage>

const mainRouter = createBrowserRouter([
    {
        path: "/register",
        element: <Suspense fallback={Loading}><RegisterPage/></Suspense>
    },
    {
        path: "/applier",
        element: <Suspense fallback={Loading}><ApplierIndex/></Suspense>,
        children:[
            {
                path: "",
                element: <Navigate to="list" replace={true}></Navigate>
            },
            {
                path:"list",
                element: <Suspense fallback={Loading}><ApplierListPage/></Suspense>
            },
            {
                path:"read/:ano",
                element: <Suspense fallback={Loading}><ApplierReadPage/></Suspense>
            }
        ]
    }

])

export default mainRouter