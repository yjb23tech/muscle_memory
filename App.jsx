import { createRoot } from "react-dom/client";
import FoodMenu from "./FoodMenu.jsx";

const App = () => {

    return (
        
        <div>
            <FoodMenu />
        </div>
    );
};

//Target location in my HTML against which I hope to render 
const container = document.getElementById("root");
//Where I want to render it too 
const root = createRoot(container);
//What I want to render 
root.render(<App />)
