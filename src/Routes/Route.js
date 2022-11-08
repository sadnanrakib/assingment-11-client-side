const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
            }
        ]
    }
])