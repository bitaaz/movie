// import styled from "styled-components";
import { createTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const theme = createTheme({});

export const useStyles = makeStyles(() => ({
  logo_div: {
    marginTop: theme.spacing(18),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    maxWidth: "200px",
  },
  card: {
    marginTop: "60px",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "20px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  error: {
    marginTop: theme.spacing(3),
    width: "100%",
    fontSize: 18,
    alignItems: "center",
  },
  email_text_field: {
    margin: theme.spacing(5, 0, 3),
  },
  resize: {
    fontSize: 18,
  },
  password_text_field: {
    marginBottom: theme.spacing(3),
  },
  submit: {
    background: theme.palette.success.dark,
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
  login_text: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  login_typography: {
    color: theme.palette.success.dark,
    marginLeft: theme.spacing(1),

    "&:hover": {
      color: theme.palette.success.light,
    },
  },
}));

// export const MyButton = styled(Button)({
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   border: 0,
//   borderRadius: 3,
//   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   color: "white",
//   height: 48,
//   padding: "0 30px",
// });

// export const Wrapper = styled.div`
//   align-items: center;
//   justify-content: center;
//   margin: 20px auto;
//   max-width: 450px;
//   height: 700px;
//   border-radius: 5px;
//   text-align: center;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   padding: 50px;

//   h1 {
//     font-size: var(--fontSuperBig);

//     @media screen and (max-width: 490px) {
//       font-size: var(--fontBig);
//     }
//   }

//   label {
//     display: flex;
//     margin: 5px 0;
//     font-size: var(--fontMed);

//     @media screen and (max-width: 490px) {
//       font-size: var(--fontSmall);
//     }
//   }
//   input {
//     margin-bottom: 10px;
//     width: 100%;
//     border-radius: 20px;
//     border-width: 1px;
//     height: 30px;
//     padding: 20px 10px;
//     outline: none;
//     font-size: var(--fontMed);

//     @media screen and (max-width: 490px) {
//       font-size: var(--fontSmall);
//       padding: 15px 10px;
//     }
//   }

//   div {
//     font-size: var(--fontMed);
//     margin-top: 120px;
//     @media screen and (max-width: 490px) {
//       font-size: var(--fontSmall);
//     }
//   }
// `;
