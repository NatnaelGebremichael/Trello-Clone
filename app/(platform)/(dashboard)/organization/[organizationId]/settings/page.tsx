import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              rootbox: {
                boxShadow: "none",
                width: "100%",
              },
              card: {
                border: "1px solid #e5e5e5",
                boxShadow: "none",
                width: "100%",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
