import { OrganizationControl } from "./_components/organization-control";

const organizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default organizationIdLayout;
