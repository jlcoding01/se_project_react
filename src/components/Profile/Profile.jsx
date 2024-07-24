import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardPreview, clothingItems, handleAddBtn }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleCardPreview={handleCardPreview}
        clothingItems={clothingItems}
        handleAddBtn={handleAddBtn}
      />
    </div>
  );
}

export default Profile;
