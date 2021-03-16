import Layout from "components/layout";

export default function TestSelection() {
    return (
        <Layout title="Index">
            <div className="containerwhite">
                <div className="title">
                    <h1>Choose Test</h1>
                </div>
                
                <div className="bigButton">
                    <button>Westmead Post Traumatic Stress Scale</button>
                </div>

                <div className="bigButton">
                    <button>Agitated Behaviour Scale</button>
                </div>

                <form className="form">
                    <button type="submit">Continue</button>
                </form>

            </div>
        </Layout>
    );
}
