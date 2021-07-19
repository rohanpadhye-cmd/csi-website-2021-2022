import CouncilCard from "./CouncilCard";

// Fetching Details of Council Members
const facultyDetails = [{ imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU", role: "Sr.Web Officer", name: "POM" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU", role: "Sr.Web Officer", name: "POM" }];

const facultyCards = facultyDetails.map((info, index) => {
    return (
        <CouncilCard
            imageUrl={info.imageUrl}
            name={info.name}
            role={info.role}
            key={index}
        />
    )
});

const Faculty = () => {
    console.log(facultyDetails);
    return (
        <>
            {facultyCards}
        </>
    );
}
 
export default Faculty;