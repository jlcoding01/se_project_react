import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardPreview }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection handleCardPreview={handleCardPreview} />
    </div>
  );
}

export default Profile;
