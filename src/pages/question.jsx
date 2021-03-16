import Layout from "components/layout";

export default function Question() {
    return (
        <Layout title="Question">
            
                <div className="header-container">
                    <input type="image" src="/images/arrow.png" />
                    <div>Answer Question</div>
                    <input type="image" src="/images/close.png" />
                </div>
            
                <form className="form">
                    <div className="container">
                        <div className="question-text">
                            <p>Question 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nostrum minima possimus laudantium totam harum molestiae optio officia sunt? </p>
                        </div>

                        <div className="question-radio-container">
                            <div className="question-radio">
                                <input type="radio" id="absent" value="Absent" name="option"/>
                                <label for="absent">Absent</label>

                                <input type="radio" id="partially" value="Partially Present" name="option" /> 
                                <label for="partially">Partially Present</label>

                                <input type="radio" id="present" value="Present" name="option" />
                                <label for="present">Present</label>
                                
                                <input type="radio" id="extremely" value="Extremely Present" name="option" /> 
                                <label for="extremely">Extremely Present</label>
                                
                            </div>
                        </div>
                    
                    </div>
                    
                    <button type="submit">Continue</button>
                </form>


        </Layout>
    );
}
