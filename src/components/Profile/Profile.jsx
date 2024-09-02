import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleCardPreview,
  clothingItems,
  handleAddBtn,
  handleOpenEditProfileModal,
}) {
  return (
    <div className="profile">
      <SideBar handleOpenEditProfileModal={handleOpenEditProfileModal} />
      <ClothesSection
        handleCardPreview={handleCardPreview}
        clothingItems={clothingItems}
        handleAddBtn={handleAddBtn}
      />
    </div>
  );
}

export default Profile;
