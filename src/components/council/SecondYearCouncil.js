import CouncilCard from "./CouncilCard";

// Fetching Details of Council Members
const seMemberDetails = [{ imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }, { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bLBI56Xq4dQ48pOiVeUzGySODcc37Od8ZQ&usqp=CAU", role: "Sr.Tech Officer", name: "Pratik" }];

const seMemberCards = seMemberDetails.map((info, index) => {
  return (
    <CouncilCard
        imageUrl= {info.imageUrl}
        name={info.name}
        role={info.role}
        key={index}
    />
  )
});

const SecondYearCouncil = () => {
  // console.log(seMemberDetails);
  return(
    <div>  
    <h1 className="mb-4" style={{alignText:"center"}}>SE Council</h1>
    <div className="map-team-cards">
    {seMemberCards}
    </div>
</div>
  );
};
 
export default SecondYearCouncil;