import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleCardPreview,
  clothingItems,
  handleAddBtn,
  handleOpenEditProfileModal,
  onCardLike,
  handleLogout,
}) {
  return (
    <div className="profile">
      <SideBar
        handleOpenEditProfileModal={handleOpenEditProfileModal}
        handleLogout={handleLogout}
      />
      <ClothesSection
        handleCardPreview={handleCardPreview}
        clothingItems={clothingItems}
        handleAddBtn={handleAddBtn}
        handleLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
