import Layout from "components/layout";

export default function Index() {
    return (
        <Layout title="Index">
            <div className="container">
                <div className="artwork">
                    <img src="/images/peep-05.svg" alt="" />
                </div>
                <form className="panel">
                    <div className="title">
                        <h1>Welcome Back</h1>
                    </div>
                    <form className="form">
                        <input type="text" placeholder="Name" />
                        <input
                            type="password"
                            pattern="\d\d\d\d"
                            inputMode="numeric"
                            placeholder="Pin"
                        />
                        <button type="submit">Continue</button>
                    </form>
                </form>
            </div>
        </Layout>
    );
}
