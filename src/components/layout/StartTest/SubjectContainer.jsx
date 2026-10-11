import "/src/styles/StartTest/subjectcontainer.css"
function SubjectContainer({ subjectname, subjectabr }) {
    return (
        <div className="subjectContainer">
            <p>{subjectabr}</p>
            <p>{subjectname}</p>
        </div>
    );
}

export default SubjectContainer;
