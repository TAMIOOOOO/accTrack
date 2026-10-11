
import Greeting from "./greeting";
import "/src/styles/StartTest/StartTest.css";
import SubjectContainer from "./SubjectContainer";
import Subjects from "/src/data/Subjects.json";

function StartTest() {
    return (
        <div className="layout">
            <Greeting name="user" />

            <div className="container-body">
                <h1>Select a Subject</h1>
                <p>You're about to take a practice test.</p>

                <div className="container-subjects">
                    {Subjects.map((item) => (
                        <SubjectContainer
                            key={item.id}
                            subjectname={item.SubName}
                            subjectabr={item.SubAbre}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StartTest;
