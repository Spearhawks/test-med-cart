import { useNavigate } from "react-router-dom"
export const Homepage = () => {
    const navigate = useNavigate();

    const GoToStore = () => {
        navigate("/store")
    }

    return (
        <>
            <h1 className="fst-italic display-1">ITHS-Grupp1 (❁´◡`❁)</h1>
            <div className="container text-center text-bg-white">
                <div className="row">
                    <button onClick={GoToStore}>Påbörja beställning</button>
                </div>
            </div>
        </>
    )
}