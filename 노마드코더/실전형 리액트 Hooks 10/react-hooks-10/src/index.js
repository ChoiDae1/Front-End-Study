import UseNetworkApp from "./hooks/useNetwork";
import { createRoot } from "react-dom/client";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <UseNetworkApp />
)





