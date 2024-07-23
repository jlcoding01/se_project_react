import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardPreview, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleCardPreview={handleCardPreview}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
