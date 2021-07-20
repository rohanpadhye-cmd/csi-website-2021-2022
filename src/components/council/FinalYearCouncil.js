import CouncilCard from "./CouncilCard";

// Fetching Details of Council Members
const beMemberDetails = [{ imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU", role: "Sr.Web Officer", name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" },{imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU" ,role:"Sr.Web Officer",name:"POM" }];

const beMemberCards = beMemberDetails.map((info, index) => {
    return (
        <CouncilCard
            imageUrl={info.imageUrl}
            name={info.name}
            role={info.role}
            key={index}
        />
    )
});

const FinalYearCouncil = () => {
    console.log(beMemberDetails);
    return (
        <>
            {beMemberCards}
        </>
    );
}

export default FinalYearCouncil;