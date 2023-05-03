import { AuthPage } from "@refinedev/mui";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      contentProps={{
        sx: {
             width: "400px",
             border: 2,
             borderColor: 'primary.main',
             borderRadius: 5,
        },
    }}
    renderContent={(content: React.ReactNode) => {
      return (
          <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              <h1 style={{ color: "#67be23" }}>OrgOversee</h1>
              {content}
              <h3 style={{ color: "#67be23" }}>Version 2.0</h3>
          </div>
      );
  }}
      formProps={{
        defaultValues: { email: "", password: "" },
      }}
      
    />
  );
};
